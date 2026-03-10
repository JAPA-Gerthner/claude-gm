package main

import (
	"bufio"
	"context"
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"sync"

	"connectrpc.com/connect"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"

	pb "claude-cli/gen/questkeeper/v1"
	"claude-cli/gen/questkeeper/v1/questkeeperv1connect"
)

var (
	projectDir  = getEnv("PROJECT_DIR", "/app/gm-skill")
	sessionsDir = getEnv("SESSIONS_DIR", "/root/.claude/projects/-app-gm-skill")
	mu          sync.Mutex
)

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

// ClaudeServer implements the ClaudeService
type ClaudeServer struct{}

func (s *ClaudeServer) Send(
	ctx context.Context,
	req *connect.Request[pb.ClaudeSendRequest],
	stream *connect.ServerStream[pb.ClaudeSendResponse],
) error {
	mu.Lock()
	defer mu.Unlock()

	// Track sessions before running (for new session detection)
	var beforeSessions map[string]bool
	if req.Msg.SessionId == nil || *req.Msg.SessionId == "" {
		beforeSessions = getSessionFiles()
	}

	// Simple --print mode (Claude CLI doesn't support true streaming in this mode)
	args := []string{"-p", req.Msg.Message, "--print", "--dangerously-skip-permissions"}
	if req.Msg.SessionId != nil && *req.Msg.SessionId != "" {
		args = append(args, "--resume", *req.Msg.SessionId)
	}

	log.Printf("Executing: claude %v", args)

	cmd := exec.CommandContext(ctx, "claude", args...)
	cmd.Dir = projectDir

	stdout, err := cmd.StdoutPipe()
	if err != nil {
		return connect.NewError(connect.CodeInternal, err)
	}

	if err := cmd.Start(); err != nil {
		return connect.NewError(connect.CodeInternal, err)
	}

	// Read output line by line
	scanner := bufio.NewScanner(stdout)
	buf := make([]byte, 0, 64*1024)
	scanner.Buffer(buf, 1024*1024)

	var fullText strings.Builder

	for scanner.Scan() {
		line := scanner.Text()
		fullText.WriteString(line)
		fullText.WriteString("\n")
	}

	if err := cmd.Wait(); err != nil {
		return stream.Send(&pb.ClaudeSendResponse{
			Event: &pb.ClaudeSendResponse_Error{Error: err.Error()},
		})
	}

	// Detect session ID
	sessionID := ""
	if req.Msg.SessionId != nil && *req.Msg.SessionId != "" {
		sessionID = *req.Msg.SessionId
	} else {
		sessionID = findNewSession(beforeSessions)
	}

	// Send complete response
	return stream.Send(&pb.ClaudeSendResponse{
		Event: &pb.ClaudeSendResponse_Complete{
			Complete: &pb.ClaudeComplete{
				FullText:  strings.TrimSpace(fullText.String()),
				SessionId: sessionID,
			},
		},
	})
}

func (s *ClaudeServer) GetSessionStats(
	ctx context.Context,
	req *connect.Request[pb.GetSessionStatsRequest],
) (*connect.Response[pb.SessionStats], error) {
	filePath := filepath.Join(sessionsDir, req.Msg.SessionId+".jsonl")
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, connect.NewError(connect.CodeNotFound, errors.New("session not found"))
	}

	stats := &pb.SessionStats{
		SessionId:  req.Msg.SessionId,
		FileSizeKb: int32(len(data) / 1024),
	}

	lines := strings.Split(string(data), "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		var entry struct {
			Usage struct {
				InputTokens  int `json:"input_tokens"`
				OutputTokens int `json:"output_tokens"`
			} `json:"usage"`
		}
		if err := json.Unmarshal([]byte(line), &entry); err != nil {
			continue
		}

		if entry.Usage.InputTokens > 0 || entry.Usage.OutputTokens > 0 {
			stats.TokenCount += int32(entry.Usage.InputTokens + entry.Usage.OutputTokens)
			stats.MessageCount++
		}
	}

	return connect.NewResponse(stats), nil
}

func (s *ClaudeServer) GetSessionHistory(
	ctx context.Context,
	req *connect.Request[pb.GetSessionHistoryRequest],
) (*connect.Response[pb.SessionHistory], error) {
	filePath := filepath.Join(sessionsDir, req.Msg.SessionId+".jsonl")
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, connect.NewError(connect.CodeNotFound, errors.New("session not found"))
	}

	var messages []*pb.HistoryMessage
	lines := strings.Split(string(data), "\n")

	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		var entry struct {
			Type    string `json:"type"` // "user" or "assistant"
			Message struct {
				Role    string `json:"role"`
				Content any    `json:"content"` // Can be string or array
			} `json:"message"`
		}
		if err := json.Unmarshal([]byte(line), &entry); err != nil {
			continue
		}

		// Only process user/assistant message entries
		if (entry.Type != "user" && entry.Type != "assistant") || entry.Message.Role == "" {
			continue
		}

		// Extract content (can be string or array of content blocks)
		var content string
		switch c := entry.Message.Content.(type) {
		case string:
			content = c
		case []any:
			// Array of content blocks
			for _, block := range c {
				if m, ok := block.(map[string]any); ok {
					if text, ok := m["text"].(string); ok {
						content += text
					}
				}
			}
		}

		if content != "" {
			// Skip system instruction messages (command expansions)
			if strings.Contains(content, "<command-message>") ||
				strings.Contains(content, "WEB FORMAT INSTRUCTIONS") ||
				strings.Contains(content, "{{PROJECT_ROOT}}") {
				continue
			}
			messages = append(messages, &pb.HistoryMessage{
				Role:    entry.Message.Role,
				Content: content,
			})
		}
	}

	log.Printf("Loaded %d messages from session %s", len(messages), req.Msg.SessionId)
	return connect.NewResponse(&pb.SessionHistory{Messages: messages}), nil
}

func (s *ClaudeServer) DeleteSession(
	ctx context.Context,
	req *connect.Request[pb.DeleteClaudeSessionRequest],
) (*connect.Response[pb.DeleteClaudeSessionResponse], error) {
	filePath := filepath.Join(sessionsDir, req.Msg.SessionId+".jsonl")
	if err := os.Remove(filePath); err != nil {
		if os.IsNotExist(err) {
			return nil, connect.NewError(connect.CodeNotFound, errors.New("session not found"))
		}
		return nil, connect.NewError(connect.CodeInternal, err)
	}

	log.Printf("Deleted session: %s", req.Msg.SessionId)
	return connect.NewResponse(&pb.DeleteClaudeSessionResponse{}), nil
}

func getSessionFiles() map[string]bool {
	files := make(map[string]bool)
	matches, _ := filepath.Glob(filepath.Join(sessionsDir, "*.jsonl"))
	for _, f := range matches {
		files[filepath.Base(f)] = true
	}
	return files
}

func findNewSession(before map[string]bool) string {
	matches, _ := filepath.Glob(filepath.Join(sessionsDir, "*.jsonl"))
	for _, f := range matches {
		base := filepath.Base(f)
		if !before[base] {
			return strings.TrimSuffix(base, ".jsonl")
		}
	}
	// Fallback: find latest by mtime
	var latest string
	var latestTime int64
	for _, f := range matches {
		info, err := os.Stat(f)
		if err == nil && info.ModTime().UnixNano() > latestTime {
			latestTime = info.ModTime().UnixNano()
			latest = strings.TrimSuffix(filepath.Base(f), ".jsonl")
		}
	}
	return latest
}

func main() {
	log.Printf("Starting Claude CLI Connect service")
	log.Printf("Project dir: %s", projectDir)
	log.Printf("Sessions dir: %s", sessionsDir)

	claudeServer := &ClaudeServer{}
	mux := http.NewServeMux()

	// Register Connect handlers
	path, handler := questkeeperv1connect.NewClaudeServiceHandler(claudeServer)
	mux.Handle(path, handler)

	// Health check (keep for Docker)
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	log.Println("Listening on :3001")

	// Use h2c for HTTP/2 without TLS (needed for streaming)
	log.Fatal(http.ListenAndServe(
		":3001",
		h2c.NewHandler(mux, &http2.Server{}),
	))
}
