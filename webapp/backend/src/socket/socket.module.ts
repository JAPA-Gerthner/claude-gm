import { Module, forwardRef } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { ChatModule } from '../chat/chat.module';

@Module({
  imports: [forwardRef(() => ChatModule)],
  providers: [GameGateway],
  exports: [GameGateway],
})
export class SocketModule {}
