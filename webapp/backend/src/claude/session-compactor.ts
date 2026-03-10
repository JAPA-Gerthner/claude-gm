/**
 * Session Compactor
 *
 * Handles compaction of Claude sessions when they approach context limits.
 * Uses /rp:web-save to create structured save, then /rp:web-load to restore in new session.
 */

import { Injectable, Logger } from '@nestjs/common';
import { ClaudeService } from './claude.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

export interface CompactionStatus {
  gameSessionId: string;
  step: 'checking' | 'saving' | 'loading' | 'complete' | 'error';
  message: string;
  progress: number; // 0-100
  error?: string;
}

export interface CompactionResult {
  success: boolean;
  oldSessionId: string;
  newSessionId?: string;
  saveContent?: string;
  error?: string;
}

@Injectable()
export class SessionCompactor {
  private readonly logger = new Logger(SessionCompactor.name);
  private readonly MAX_TOKENS = 150000; // Conservative limit before Claude's 200k

  constructor(
    private claudeService: ClaudeService,
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   * Check if a session needs compaction
   */
  async checkNeedsCompaction(claudeSessionId: string): Promise<boolean> {
    const stats = await this.claudeService.getSessionStats(claudeSessionId);
    if (!stats) return false;

    const totalTokens = Number(stats.tokenCount);
    return totalTokens > this.MAX_TOKENS;
  }

  /**
   * Emit status update via EventEmitter (picked up by WebSocket gateway)
   */
  private emitStatus(gameSessionId: string, status: Omit<CompactionStatus, 'gameSessionId'>) {
    const fullStatus: CompactionStatus = { gameSessionId, ...status };
    this.eventEmitter.emit('compaction.status', fullStatus);
    this.logger.log(`Compaction [${gameSessionId}]: ${status.step} - ${status.message}`);
  }

  /**
   * Perform compaction on a session
   *
   * Process:
   * 1. Run /rp:web-save on current session to get structured save
   * 2. Create new Claude session with /rp:web-load (includes save content)
   * 3. Return new session ID
   */
  async compact(gameSessionId: string, claudeSessionId: string): Promise<CompactionResult> {
    this.emitStatus(gameSessionId, {
      step: 'checking',
      message: 'Проверяем состояние сессии...',
      progress: 10,
    });

    try {
      // Step 1: Generate save with /rp:web-save
      this.emitStatus(gameSessionId, {
        step: 'saving',
        message: 'Сохраняем прогресс игры...',
        progress: 30,
      });

      const saveResponse = await this.claudeService.send('/rp:web-save', claudeSessionId);
      if (saveResponse.error) {
        throw new Error(`Failed to save: ${saveResponse.error}`);
      }

      // Extract save content from JSON response
      const saveContent = this.extractSaveContent(saveResponse.response);

      // Step 2: Load save into new session with /rp:web-load
      // This creates a new session and restores state in one step
      this.emitStatus(gameSessionId, {
        step: 'loading',
        message: 'Загружаем сохранение в новую сессию...',
        progress: 60,
      });

      // /rp:web-load accepts inline save content
      const loadMessage = `/rp:web-load\n\n${saveContent}`;
      const loadResponse = await this.claudeService.send(loadMessage);
      if (loadResponse.error) {
        throw new Error(`Failed to load save: ${loadResponse.error}`);
      }

      const newSessionId = loadResponse.sessionId;

      // Step 3: Complete
      this.emitStatus(gameSessionId, {
        step: 'complete',
        message: 'Компакция завершена!',
        progress: 100,
      });

      this.logger.log(
        `Compaction complete: ${claudeSessionId} -> ${newSessionId}`,
      );

      return {
        success: true,
        oldSessionId: claudeSessionId,
        newSessionId,
        saveContent,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);

      this.emitStatus(gameSessionId, {
        step: 'error',
        message: 'Ошибка компакции',
        progress: 0,
        error: errorMessage,
      });

      return {
        success: false,
        oldSessionId: claudeSessionId,
        error: errorMessage,
      };
    }
  }

  /**
   * Extract save content from /rp:web-save response
   * The response is JSON with a "save" field containing YAML
   */
  private extractSaveContent(response: string): string {
    // Try to parse as JSON first (expected format from /rp:web-save)
    try {
      const parsed = JSON.parse(response);
      if (parsed.save) {
        return parsed.save;
      }
      // If content field contains the save markers
      if (parsed.content && parsed.content.includes('---SAVE---')) {
        const match = parsed.content.match(/---SAVE---([\s\S]*?)---END---/);
        if (match) {
          return `---SAVE---${match[1]}---END---`;
        }
      }
    } catch {
      // Not JSON, try other patterns
    }

    // Try to find YAML save block directly
    const yamlMatch = response.match(/---SAVE---([\s\S]*?)---END---/);
    if (yamlMatch) {
      return `---SAVE---${yamlMatch[1]}---END---`;
    }

    // Try to find content between code blocks
    const codeBlockMatch = response.match(/```(?:json|yaml|save)?\n([\s\S]*?)\n```/);
    if (codeBlockMatch) {
      return codeBlockMatch[1];
    }

    // Fallback: return full response
    return response;
  }

  /**
   * Perform compaction if needed
   * Returns true if compaction was performed
   */
  async compactIfNeeded(
    gameSessionId: string,
    claudeSessionId: string,
  ): Promise<{ compacted: boolean; newSessionId?: string }> {
    const needsCompaction = await this.checkNeedsCompaction(claudeSessionId);

    if (!needsCompaction) {
      return { compacted: false };
    }

    const result = await this.compact(gameSessionId, claudeSessionId);

    if (result.success && result.newSessionId) {
      return { compacted: true, newSessionId: result.newSessionId };
    }

    return { compacted: false };
  }
}
