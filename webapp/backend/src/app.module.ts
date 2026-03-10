import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ClaudeModule } from './claude/claude.module';
import { DatabaseModule } from './database/database.module';
import { GameSessionModule } from './game-session/game-session.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 20,
    }]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    DatabaseModule,
    AuthModule,
    ChatModule,
    ClaudeModule,
    GameSessionModule,
    SocketModule,
  ],
})
export class AppModule {}
