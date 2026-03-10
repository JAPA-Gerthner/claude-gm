import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GameSession } from '../database/game-session.model';
import { Message } from '../database/message.model';
import { ClaudeService } from '../claude/claude.service';

export interface CreateSessionDto {
  userId: string;
  ruleset: string;
  tone?: string;
  difficulty?: string;
  customMechanics?: boolean;
}

export interface SessionWithStats extends GameSession {
  tokenCount?: number;
  messageCount?: number;
}

@Injectable()
export class GameSessionService {
  private readonly logger = new Logger(GameSessionService.name);

  constructor(
    @InjectModel(GameSession)
    private gameSessionModel: typeof GameSession,
    @InjectModel(Message)
    private messageModel: typeof Message,
    private claudeService: ClaudeService,
  ) {}

  async create(dto: CreateSessionDto): Promise<GameSession> {
    const session = await this.gameSessionModel.create({
      userId: dto.userId,
      ruleset: dto.ruleset,
      tone: dto.tone || 'medium',
      difficulty: dto.difficulty || 'standard',
      customMechanics: dto.customMechanics || false,
    });
    this.logger.log(`Created game session ${session.id} for user ${dto.userId}`);
    return session;
  }

  async findAllByUser(userId: string): Promise<SessionWithStats[]> {
    const sessions = await this.gameSessionModel.findAll({
      where: { userId },
      order: [['updatedAt', 'DESC']],
    });

    // Fetch stats in parallel
    const statsPromises = sessions.map(session =>
      this.getClaudeStats(session.claudeSessionId)
    );
    const allStats = await Promise.all(statsPromises);

    return sessions.map((session, i) => ({
      ...session.toJSON(),
      tokenCount: allStats[i]?.tokenCount || 0,
      messageCount: allStats[i]?.messageCount || 0,
    } as SessionWithStats));
  }

  async findOne(id: string, userId: string): Promise<GameSession> {
    const session = await this.gameSessionModel.findOne({
      where: { id, userId },
    });
    if (!session) {
      throw new NotFoundException('Game session not found');
    }
    return session;
  }

  async updateClaudeSession(id: string, claudeSessionId: string): Promise<void> {
    await this.gameSessionModel.update(
      { claudeSessionId },
      { where: { id } },
    );
  }

  async updateCharacter(id: string, characterName: string, characterClass: string): Promise<void> {
    await this.gameSessionModel.update(
      { characterName, characterClass },
      { where: { id } },
    );
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.gameSessionModel.update({ name }, { where: { id } });
  }

  async delete(id: string, userId: string): Promise<void> {
    const session = await this.findOne(id, userId);

    // Delete Claude session file if exists
    if (session.claudeSessionId) {
      await this.deleteClaudeSession(session.claudeSessionId);
    }

    // Delete all messages first (foreign key constraint)
    await this.messageModel.destroy({ where: { sessionId: id } });

    await session.destroy();
    this.logger.log(`Deleted game session ${id}`);
  }

  private async getClaudeStats(claudeSessionId: string | null): Promise<{ tokenCount: number; messageCount: number } | null> {
    if (!claudeSessionId) return null;

    const stats = await this.claudeService.getSessionStats(claudeSessionId);
    if (!stats) return null;

    return {
      tokenCount: Number(stats.tokenCount),
      messageCount: Number(stats.messageCount),
    };
  }

  private async deleteClaudeSession(claudeSessionId: string): Promise<void> {
    await this.claudeService.deleteSession(claudeSessionId);
  }
}
