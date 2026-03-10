import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { IsString, IsNotEmpty, MaxLength, IsUUID, IsOptional } from 'class-validator';
import { ChatService } from './chat.service';
import { AuthGuard } from '../auth/auth.guard';

interface AuthenticatedUser {
  sub: string;
  name: string;
  email?: string;
  avatar?: string;
}

interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}

class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  message: string;

  @IsUUID()
  gameSessionId: string;

  @IsOptional()
  @IsString()
  @MaxLength(8000)
  displayContent?: string;
}

@Controller('chat')
@UseGuards(AuthGuard, ThrottlerGuard)
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get('history/:gameSessionId')
  async getHistory(@Param('gameSessionId') gameSessionId: string, @Req() req: AuthenticatedRequest) {
    const userId = req.user.sub;
    return this.chatService.getHistory(userId, gameSessionId);
  }

  @Post('send')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  async sendMessage(@Body() dto: SendMessageDto, @Req() req: AuthenticatedRequest) {
    const { sub: userId, name: userName, avatar: userAvatar } = req.user;
    return this.chatService.sendMessage(
      userId,
      userName || 'Player',
      userAvatar,
      dto.gameSessionId,
      dto.message,
      dto.displayContent,
    );
  }
}
