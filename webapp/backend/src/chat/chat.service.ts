import { Injectable, Logger, NotFoundException, ForbiddenException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClaudeService } from '../claude/claude.service';
import { SessionCompactor } from '../claude/session-compactor';
import { GameSession } from '../database/game-session.model';
import { Message } from '../database/message.model';
import { SessionEventsService } from '../game-session/session-events.service';
import { GameGateway } from '../socket/game.gateway';
import { ChatMessageResponse, ChatStreamChunk } from '../gen/questkeeper/v1/questkeeper_pb';

interface ClaudeMeta {
  ruleset?: string;
  rulesetDisplay?: string;
  characterName?: string;
  chapterName?: string;
}

interface SessionUpdates {
  ruleset?: string;
  rulesetDisplay?: string;
  characterName?: string;
  name?: string;
}

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(
    private claudeService: ClaudeService,
    private sessionCompactor: SessionCompactor,
    @InjectModel(GameSession)
    private gameSessionModel: typeof GameSession,
    @InjectModel(Message)
    private messageModel: typeof Message,
    private sessionEvents: SessionEventsService,
    @Inject(forwardRef(() => GameGateway))
    private gameGateway: GameGateway,
  ) {}

  async getHistory(userId: string, gameSessionId: string) {
    // Find game session and verify ownership
    const gameSession = await this.gameSessionModel.findByPk(gameSessionId);
    if (!gameSession) {
      throw new NotFoundException('Game session not found');
    }
    if (gameSession.userId !== userId) {
      throw new ForbiddenException('Not your game session');
    }

    // Load messages from our DB
    const messages = await this.messageModel.findAll({
      where: { sessionId: gameSessionId, isCompacted: false },
      order: [['createdAt', 'ASC']],
    });

    return {
      messages: messages.map(m => ({
        role: m.role,
        content: m.contentDisplay || m.contentSent,
        senderId: m.senderId,
        senderName: m.senderName,
        senderAvatar: m.senderAvatar,
        createdAt: m.createdAt,
      })),
    };
  }

  async sendMessage(
    userId: string,
    userName: string,
    userAvatar: string | undefined,
    gameSessionId: string,
    message: string,
    displayContent?: string,
  ) {
    // Find game session and verify ownership
    const gameSession = await this.gameSessionModel.findByPk(gameSessionId);
    if (!gameSession) {
      throw new NotFoundException('Game session not found');
    }
    if (gameSession.userId !== userId) {
      throw new ForbiddenException('Not your game session');
    }

    const claudeSessionId = gameSession.claudeSessionId;
    this.logger.log(`User ${userId} sending message to game ${gameSessionId}, claude session: ${claudeSessionId || 'new'}`);

    // Save user message to DB
    await this.messageModel.create({
      sessionId: gameSessionId,
      role: 'user',
      senderId: userId,
      senderName: userName,
      senderAvatar: userAvatar || null,
      contentSent: message,
      contentDisplay: displayContent && displayContent !== message ? displayContent : null,
    });

    const result = await this.claudeService.send(message, claudeSessionId);

    // Parse JSON response
    const { content, meta } = this.parseClaudeResponse(result.response);

    // Save assistant message to DB (content only, not raw JSON)
    await this.messageModel.create({
      sessionId: gameSessionId,
      role: 'assistant',
      senderId: null,
      senderName: 'Game Master',
      senderAvatar: '/gm-avatar.webp',
      contentSent: content,
      contentDisplay: null,
    });

    // Update claude session ID if new
    if (result.sessionId && result.sessionId !== claudeSessionId) {
      await gameSession.update({ claudeSessionId: result.sessionId });
      this.logger.log(`Updated claude session to ${result.sessionId} for game ${gameSessionId}`);
    }

    // Update session metadata from meta
    const updates = this.mapMetaToSessionUpdates(meta);
    if (Object.keys(updates).length > 0) {
      await gameSession.update(updates);
      this.logger.log(`Updated session metadata: ${JSON.stringify(updates)}`);

      // Emit session update event
      this.sessionEvents.emit({
        sessionId: gameSessionId,
        userId,
        type: 'updated',
        data: updates,
      });
    }

    return {
      content,
      sessionId: result.sessionId,
      error: result.error,
    };
  }

  /**
   * Send message via socket (broadcasts to room)
   */
  async sendMessageViaSocket(
    userId: string,
    userName: string,
    userAvatar: string | undefined,
    gameSessionId: string,
    message: string,
    displayContent?: string,
  ): Promise<void> {
    // Find game session and verify ownership
    const gameSession = await this.gameSessionModel.findByPk(gameSessionId);
    if (!gameSession) {
      throw new NotFoundException('Game session not found');
    }
    // TODO: For multiplayer, check if user is member of session, not just owner
    if (gameSession.userId !== userId) {
      throw new ForbiddenException('Not your game session');
    }

    const claudeSessionId = gameSession.claudeSessionId;
    this.logger.log(`[Socket] User ${userId} sending to game ${gameSessionId}`);

    // Save and broadcast user message
    const userMsg = await this.messageModel.create({
      sessionId: gameSessionId,
      role: 'user',
      senderId: userId,
      senderName: userName,
      senderAvatar: userAvatar || null,
      contentSent: message,
      contentDisplay: displayContent && displayContent !== message ? displayContent : null,
    });

    // Broadcast user message to room
    this.gameGateway.broadcastChatMessage(gameSessionId, new ChatMessageResponse({
      messageId: userMsg.id,
      role: 'user',
      content: displayContent || message,
      senderId: userId,
      senderName: userName,
      senderAvatar: userAvatar || '',
      timestamp: BigInt(Date.now()),
    }));

    // Get Claude response (no real streaming - Claude CLI buffers everything)
    const result = await this.claudeService.send(message, claudeSessionId);

    // Parse JSON response
    const { content, meta } = this.parseClaudeResponse(result.response);

    // Save assistant message (content only, not raw JSON)
    const assistantMsg = await this.messageModel.create({
      sessionId: gameSessionId,
      role: 'assistant',
      senderId: null,
      senderName: 'Game Master',
      senderAvatar: '/gm-avatar.webp',
      contentSent: content,
      contentDisplay: null,
    });

    // Broadcast assistant message to room
    this.gameGateway.broadcastChatMessage(gameSessionId, new ChatMessageResponse({
      messageId: assistantMsg.id,
      role: 'assistant',
      content,
      senderId: '',
      senderName: 'Game Master',
      senderAvatar: '/gm-avatar.webp',
      timestamp: BigInt(Date.now()),
    }));

    // Update claude session ID if new
    if (result.sessionId && result.sessionId !== claudeSessionId) {
      await gameSession.update({ claudeSessionId: result.sessionId });
    }

    // Update session metadata from meta
    const updates = this.mapMetaToSessionUpdates(meta);
    if (Object.keys(updates).length > 0) {
      await gameSession.update(updates);
      this.sessionEvents.emit({
        sessionId: gameSessionId,
        userId,
        type: 'updated',
        data: updates,
      });
    }

    // Check if session needs compaction (runs in background, doesn't block response)
    const currentClaudeSessionId = result.sessionId || claudeSessionId;
    if (currentClaudeSessionId) {
      this.sessionCompactor.compactIfNeeded(gameSessionId, currentClaudeSessionId)
        .then(({ compacted, newSessionId }) => {
          if (compacted && newSessionId) {
            gameSession.update({ claudeSessionId: newSessionId });
            this.logger.log(`Session ${gameSessionId} compacted: ${currentClaudeSessionId} -> ${newSessionId}`);
          }
        })
        .catch(err => this.logger.warn(`Compaction check failed: ${err}`));
    }
  }

  /**
   * Parse Claude's JSON response. Returns content and metadata.
   * Falls back to raw response if not valid JSON.
   */
  private parseClaudeResponse(response: string): { content: string; meta: ClaudeMeta } {
    try {
      // Clean up response - remove potential markdown code fences and trim
      let cleaned = response.trim();
      if (cleaned.startsWith('```json')) {
        cleaned = cleaned.slice(7);
      } else if (cleaned.startsWith('```')) {
        cleaned = cleaned.slice(3);
      }
      if (cleaned.endsWith('```')) {
        cleaned = cleaned.slice(0, -3);
      }
      cleaned = cleaned.trim();

      const parsed = JSON.parse(cleaned);
      if (parsed.content && typeof parsed.content === 'string') {
        this.logger.log(`Parsed JSON response with meta: ${JSON.stringify(parsed.meta || {})}`);
        return {
          content: parsed.content,
          meta: parsed.meta || {},
        };
      }
    } catch (e) {
      this.logger.warn(`Failed to parse Claude response as JSON: ${e}`);
    }

    // Fallback: return raw response
    this.logger.log('Using raw response (not JSON)');
    return { content: response, meta: {} };
  }

  /**
   * Map meta fields to session fields
   */
  private mapMetaToSessionUpdates(meta: ClaudeMeta): SessionUpdates {
    const updates: SessionUpdates = {};

    if (meta.ruleset) {
      updates.ruleset = meta.ruleset;
    }
    if (meta.rulesetDisplay) {
      updates.rulesetDisplay = meta.rulesetDisplay;
    }
    if (meta.characterName) {
      updates.characterName = meta.characterName;
    }
    if (meta.chapterName) {
      updates.name = meta.chapterName;
    }

    return updates;
  }
}
