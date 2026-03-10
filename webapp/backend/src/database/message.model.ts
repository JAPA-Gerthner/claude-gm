import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  Default,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { GameSession } from './game-session.model';

@Table({ tableName: 'messages', updatedAt: false })
export class Message extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => GameSession)
  @Column({ field: 'session_id', allowNull: false, type: DataType.UUID })
  sessionId: string;

  @BelongsTo(() => GameSession)
  session: GameSession;

  @Column({ allowNull: false, type: DataType.STRING })
  role: 'user' | 'assistant';

  // Who sent this message (null for assistant)
  @Column({ field: 'sender_id', allowNull: true, type: DataType.STRING })
  senderId: string | null;

  @Column({ field: 'sender_name', allowNull: true, type: DataType.STRING })
  senderName: string | null;

  @Column({ field: 'sender_avatar', allowNull: true, type: DataType.STRING })
  senderAvatar: string | null;

  // What was sent to Claude
  @Column({ field: 'content_sent', allowNull: false, type: DataType.TEXT })
  contentSent: string;

  // Pretty version for display (null = same as contentSent)
  @Column({ field: 'content_display', allowNull: true, type: DataType.TEXT })
  contentDisplay: string | null;

  // Compaction tracking
  @Default(false)
  @Column({ field: 'is_compacted' })
  isCompacted: boolean;

  @Column({ field: 'compacted_into', allowNull: true, type: DataType.UUID })
  compactedInto: string | null;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
}
