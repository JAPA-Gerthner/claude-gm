import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GameSession } from './game-session.model';
import { Message } from './message.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.DATABASE_URL,
      autoLoadModels: true,
      synchronize: true, // Dev only - creates tables automatically
      logging: false,
    }),
    SequelizeModule.forFeature([GameSession, Message]),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
