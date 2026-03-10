import { Injectable, Logger } from '@nestjs/common';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface SessionEvent {
  sessionId: string;
  userId: string;
  type: 'updated' | 'deleted';
  data?: {
    name?: string;
    characterName?: string;
    characterClass?: string;
    ruleset?: string;
    tokenCount?: number;
    messageCount?: number;
  };
}

@Injectable()
export class SessionEventsService {
  private readonly logger = new Logger(SessionEventsService.name);
  private events$ = new Subject<SessionEvent>();

  emit(event: SessionEvent): void {
    this.logger.log(`Emitting ${event.type} for session ${event.sessionId}`);
    this.events$.next(event);
  }

  subscribe(userId: string): Observable<SessionEvent> {
    this.logger.log(`User ${userId} subscribed to session events`);
    return this.events$.pipe(
      filter(event => event.userId === userId)
    );
  }
}
