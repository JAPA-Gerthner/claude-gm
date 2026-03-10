import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  Default,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({ tableName: 'game_sessions' })
export class GameSession extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column({ field: 'user_id', allowNull: false })
  userId: string;

  @Column({ allowNull: true })
  name: string;

  // Game settings
  @Column({ allowNull: false })
  ruleset: string;

  @Column({ field: 'ruleset_display', allowNull: true })
  rulesetDisplay: string;

  @Default('medium')
  @Column
  tone: string;

  @Default('standard')
  @Column
  difficulty: string;

  @Default(false)
  @Column({ field: 'custom_mechanics' })
  customMechanics: boolean;

  // Character info
  @Column({ field: 'character_name', allowNull: true })
  characterName: string;

  @Column({ field: 'character_class', allowNull: true })
  characterClass: string;

  // Claude session
  @Column({ field: 'claude_session_id', allowNull: true })
  claudeSessionId: string;

  // Save file
  @Column({ field: 'save_file_path', allowNull: true })
  saveFilePath: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;
}
