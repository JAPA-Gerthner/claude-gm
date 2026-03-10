import { Module } from '@nestjs/common';
import { ClaudeService } from './claude.service';
import { SessionCompactor } from './session-compactor';

@Module({
  providers: [ClaudeService, SessionCompactor],
  exports: [ClaudeService, SessionCompactor],
})
export class ClaudeModule {}
