/**
 * Session Compactor
 *
 * Handles compaction of Claude sessions when they approach context limits.
 * Uses /rp:save to create a summary, then starts a fresh session with that save.
 */

import { Injectable, Logger } from '@nestjs/common';
import { ClaudeService } from './claude.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

export interface CompactionStatus {
  gameSessionId: string;
  step: 'checking' | 'saving' | 'creating' | 'loading' | 'complete' | 'error';
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
   * 1. Run /rp:save on current session to get summary
   * 2. Create new Claude session
   * 3. Load the save into new session with /rp:load
   * 4. Return new session ID
   */
  async compact(gameSessionId: string, claudeSessionId: string): Promise<CompactionResult> {
    this.emitStatus(gameSessionId, {
      step: 'checking',
      message: 'Проверяем состояние сессии...',
      progress: 10,
    });

    try {
      // Step 1: Generate save
      this.emitStatus(gameSessionId, {
        step: 'saving',
        message: 'Сохраняем прогресс игры...',
        progress: 30,
      });

      const saveResponse = await this.claudeService.send('/rp:save', claudeSessionId);
      if (saveResponse.error) {
        throw new Error(`Failed to save: ${saveResponse.error}`);
      }

      // Extract save content from response
      // The save is typically formatted as a code block or structured text
      const saveContent = this.extractSaveContent(saveResponse.response);

      // Step 2: Create new session
      this.emitStatus(gameSessionId, {
        step: 'creating',
        message: 'Создаём новую сессию...',
        progress: 50,
      });

      // Start fresh session with /rp:start
      const startResponse = await this.claudeService.send('/rp:start');
      if (startResponse.error) {
        throw new Error(`Failed to start new session: ${startResponse.error}`);
      }

      const newSessionId = startResponse.sessionId;

      // Step 3: Load save into new session
      this.emitStatus(gameSessionId, {
        step: 'loading',
        message: 'Загружаем сохранение в новую сессию...',
        progress: 70,
      });

      // Send the save content to load
      const loadMessage = `/rp:load\n\n${saveContent}`;
      const loadResponse = await this.claudeService.send(loadMessage, newSessionId);
      if (loadResponse.error) {
        throw new Error(`Failed to load save: ${loadResponse.error}`);
      }

      // Step 4: Complete
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
   * Extract save content from /rp:save response
   * Looks for structured save data in the response
   */
  private extractSaveContent(response: string): string {
    // Try to find content between code blocks
    const codeBlockMatch = response.match(/```(?:json|yaml|save)?\n([\s\S]*?)\n```/);
    if (codeBlockMatch) {
      return codeBlockMatch[1];
    }

    // Try to find YAML-like structured content
    const structuredMatch = response.match(
      /(?:GAME STATE|CHARACTER|SESSION SAVE|---)([\s\S]*?)(?:---|$)/i,
    );
    if (structuredMatch) {
      return structuredMatch[0];
    }

    // Fallback: return full response (it might be the save itself)
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
