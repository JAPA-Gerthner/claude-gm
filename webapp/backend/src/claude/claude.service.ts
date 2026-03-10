import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { createPromiseClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-node';
import { ClaudeService as ClaudeServiceDef } from '../gen/questkeeper/v1/questkeeper_connect.js';
import { ClaudeSendRequest, SessionStats, SessionHistory } from '../gen/questkeeper/v1/questkeeper_pb.js';

export interface ClaudeResponse {
  response: string;
  sessionId: string;
  error?: string;
}

export type ChunkCallback = (chunk: string) => void;

@Injectable()
export class ClaudeService implements OnModuleInit {
  private readonly logger = new Logger(ClaudeService.name);
  private readonly claudeUrl = process.env.CLAUDE_SERVICE_URL || 'http://claude-cli:3001';
  private client: ReturnType<typeof createPromiseClient<typeof ClaudeServiceDef>>;

  onModuleInit() {
    const transport = createConnectTransport({
      baseUrl: this.claudeUrl,
      httpVersion: '2',
    });
    this.client = createPromiseClient(ClaudeServiceDef, transport);
    this.logger.log(`Connect client initialized for ${this.claudeUrl}`);
  }

  async send(message: string, sessionId?: string): Promise<ClaudeResponse> {
    return this.sendStream(message, sessionId);
  }

  /**
   * Send message with streaming support
   * @param onChunk - callback called for each streaming chunk
   */
  async sendStream(
    message: string,
    sessionId?: string,
    onChunk?: ChunkCallback,
  ): Promise<ClaudeResponse> {
    this.logger.log(`Sending to Claude: "${message.slice(0, 50)}..." session: ${sessionId || 'new'}`);

    try {
      const req = new ClaudeSendRequest({
        message,
        sessionId: sessionId || undefined,
      });

      let fullText = '';
      let resultSessionId = sessionId || '';
      let error: string | undefined;

      // Collect streaming response
      for await (const res of this.client.send(req)) {
        if (res.event.case === 'chunk') {
          const chunk = res.event.value;
          fullText += chunk;
          if (onChunk) {
            onChunk(chunk);
          }
        } else if (res.event.case === 'complete') {
          fullText = res.event.value.fullText;
          resultSessionId = res.event.value.sessionId;
        } else if (res.event.case === 'error') {
          error = res.event.value;
        }
      }

      this.logger.log(`Claude responded, session: ${resultSessionId}`);

      return {
        response: fullText,
        sessionId: resultSessionId,
        error,
      };
    } catch (err) {
      this.logger.error(`Claude error: ${err}`);
      return {
        response: '',
        sessionId: sessionId || '',
        error: String(err),
      };
    }
  }

  async getSessionStats(sessionId: string): Promise<SessionStats | null> {
    try {
      const res = await this.client.getSessionStats({ sessionId });
      return res;
    } catch (err) {
      this.logger.debug(`getSessionStats(${sessionId}): ${err}`);
      return null;
    }
  }

  async getSessionHistory(sessionId: string): Promise<SessionHistory | null> {
    try {
      const res = await this.client.getSessionHistory({ sessionId });
      return res;
    } catch (err) {
      this.logger.debug(`getSessionHistory(${sessionId}): ${err}`);
      return null;
    }
  }

  async deleteSession(sessionId: string): Promise<void> {
    try {
      await this.client.deleteSession({ sessionId });
    } catch (err) {
      this.logger.warn(`Failed to delete session ${sessionId}: ${err}`);
    }
  }
}
