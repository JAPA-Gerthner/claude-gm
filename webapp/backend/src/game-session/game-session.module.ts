import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GameSession } from '../database/game-session.model';
import { Message } from '../database/message.model';
import { GameSessionService } from './game-session.service';
import { GameSessionController } from './game-session.controller';
import { SessionSubscribeController } from './session-subscribe.controller';
import { SessionEventsService } from './session-events.service';
import { AuthModule } from '../auth/auth.module';
import { ClaudeModule } from '../claude/claude.module';

@Module({
  imports: [
    SequelizeModule.forFeature([GameSession, Message]),
    AuthModule,
    ClaudeModule,
  ],
  controllers: [SessionSubscribeController, GameSessionController],
  providers: [GameSessionService, SessionEventsService],
  exports: [GameSessionService, SessionEventsService],
})
export class GameSessionModule {}
