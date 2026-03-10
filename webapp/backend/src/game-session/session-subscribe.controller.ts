import {
  Controller,
  Sse,
  Query,
  MessageEvent,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { SessionEventsService } from './session-events.service';
import { JwtService } from '@nestjs/jwt';

@Controller('game-sessions')
export class SessionSubscribeController {
  constructor(
    private sessionEvents: SessionEventsService,
    private jwtService: JwtService,
  ) {}

  @Sse('subscribe')
  subscribe(@Query('token') token: string): Observable<MessageEvent> {
    if (!token) {
      throw new UnauthorizedException('Token required');
    }

    try {
      const payload = this.jwtService.verify(token);
      const userId = payload.sub;

      return this.sessionEvents.subscribe(userId).pipe(
        map(event => ({
          data: event,
        } as MessageEvent)),
      );
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
