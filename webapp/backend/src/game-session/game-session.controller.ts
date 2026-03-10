import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common';
import { GameSessionService, CreateSessionDto } from './game-session.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('game-sessions')
@UseGuards(AuthGuard)
export class GameSessionController {
  constructor(private gameSessionService: GameSessionService) {}

  @Get()
  async findAll(@Request() req) {
    return this.gameSessionService.findAllByUser(req.user.sub);
  }

  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    return this.gameSessionService.findOne(id, req.user.sub);
  }

  @Post()
  async create(@Request() req, @Body() dto: Omit<CreateSessionDto, 'userId'>) {
    return this.gameSessionService.create({
      ...dto,
      userId: req.user.sub,
    });
  }

  @Patch(':id/name')
  async updateName(
    @Request() req,
    @Param('id') id: string,
    @Body('name') name: string,
  ) {
    await this.gameSessionService.findOne(id, req.user.sub); // Auth check
    await this.gameSessionService.updateName(id, name);
    return { success: true };
  }

  @Delete(':id')
  async delete(@Request() req, @Param('id') id: string) {
    await this.gameSessionService.delete(id, req.user.sub);
    return { success: true };
  }
}
