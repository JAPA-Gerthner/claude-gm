import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ClaudeModule } from '../claude/claude.module';
import { AuthModule } from '../auth/auth.module';
import { GameSessionModule } from '../game-session/game-session.module';
import { SocketModule } from '../socket/socket.module';
import { GameSession } from '../database/game-session.model';
import { Message } from '../database/message.model';

@Module({
  imports: [
    ClaudeModule,
    AuthModule,
    forwardRef(() => GameSessionModule),
    forwardRef(() => SocketModule),
    SequelizeModule.forFeature([GameSession, Message]),
  ],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
