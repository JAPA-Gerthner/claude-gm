# Quest Keeper Web App — Design Document

## Overview

Telegram Mini App для текстовой RPG с Claude как Game Master.

**Ключевые фичи:**
- MD рендеринг игрового контента
- Табы: Игра / Шит / NPC / Карта / Фракции
- Авто-компакт при достижении лимита контекста
- Multi-user support

---

## Архитектура

```
┌──────────────────────────────────────────────────────────────┐
│                      DOCKER COMPOSE                           │
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ frontend │  │ backend  │  │ postgres │  │  claude-cli  │  │
│  │  :5173   │  │  :3000   │──│  :5432   │  │    :3001     │  │
│  └──────────┘  └────┬─────┘  └──────────┘  └───────┬──────┘  │
│                     │                              │          │
│                     └────────── HTTP ──────────────┘          │
│                                                               │
│  ┌──────────┐  ┌──────────┐                                  │
│  │  nginx   │  │ pgadmin  │                                  │
│  │   :80    │  │  :5050   │                                  │
│  └──────────┘  └──────────┘                                  │
│       │                                                       │
│       ▼                                                       │
│  ┌──────────────┐                                            │
│  │ cloudflared  │ ──▶ HTTPS tunnel                           │
│  └──────────────┘                                            │
│                                                               │
│  Volumes:                                                     │
│  - ~/.claude:/root/.claude (auth)                            │
│  - ./gm-skill:/app/gm-skill (project)                        │
│  - ./volumes/postgres (data)                                  │
└──────────────────────────────────────────────────────────────┘
```

---

## Структура проекта

```
webapp/
├── docker-compose.yml
├── .env
├── DESIGN.md
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.ts
│   ├── index.html
│   └── src/
│       ├── main.ts
│       ├── api.ts
│       ├── components/
│       │   ├── Tabs.ts
│       │   ├── Chat.ts
│       │   └── Loader.ts
│       ├── styles/
│       │   └── main.css
│       └── lib/
│           └── markdown.ts
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       ├── routes/
│       │   ├── session.ts
│       │   ├── message.ts
│       │   └── command.ts
│       ├── services/
│       │   ├── claude.ts
│       │   ├── session.ts
│       │   └── compaction.ts
│       ├── db/
│       │   ├── client.ts
│       │   └── migrations/
│       └── types/
│
├── claude-cli/
│   ├── Dockerfile
│   └── server.js
│
├── nginx/
│   └── nginx.conf
│
└── volumes/
    └── postgres/
```

---

## Docker Services

### postgres
```yaml
postgres:
  image: postgres:16-alpine
  environment:
    POSTGRES_DB: questkeeper
    POSTGRES_USER: ${PG_USER}
    POSTGRES_PASSWORD: ${PG_PASS}
  volumes:
    - ./volumes/postgres:/var/lib/postgresql/data
  ports:
    - "5432:5432"
  healthcheck:
    test: ["CMD-SHELL", "pg_isready -U ${PG_USER}"]
    interval: 5s
    timeout: 5s
    retries: 5
```

### pgadmin
```yaml
pgadmin:
  image: dpage/pgadmin4
  environment:
    PGADMIN_DEFAULT_EMAIL: ${PGADMIN_EMAIL}
    PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_PASS}
  ports:
    - "5050:80"
  depends_on:
    - postgres
```

### backend
```yaml
backend:
  build: ./backend
  environment:
    DATABASE_URL: postgres://${PG_USER}:${PG_PASS}@postgres:5432/questkeeper
    CLAUDE_SERVICE_URL: http://claude-cli:3001
  volumes:
    - ./backend/src:/app/src
  ports:
    - "3000:3000"
  depends_on:
    postgres:
      condition: service_healthy
    claude-cli:
      condition: service_started
```

### frontend
```yaml
frontend:
  build: ./frontend
  volumes:
    - ./frontend/src:/app/src
  ports:
    - "5173:5173"
  depends_on:
    - backend
```

### claude-cli
```yaml
claude-cli:
  build: ./claude-cli
  volumes:
    - ~/.claude:/root/.claude
    - ../:/app/gm-skill:ro
  environment:
    PROJECT_DIR: /app/gm-skill
  ports:
    - "3001:3001"
```

### nginx
```yaml
nginx:
  image: nginx:alpine
  volumes:
    - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
  ports:
    - "80:80"
  depends_on:
    - frontend
    - backend
```

### tunnel
```yaml
tunnel:
  image: cloudflare/cloudflared:latest
  command: tunnel --no-autoupdate run
  environment:
    TUNNEL_TOKEN: ${CF_TUNNEL_TOKEN}
  depends_on:
    - nginx
```

---

## Database Schema

```sql
-- sessions
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  telegram_user_id BIGINT NOT NULL,
  claude_session_id VARCHAR(255),
  ruleset VARCHAR(100),
  context_pct DECIMAL(5,4) DEFAULT 0,
  compactions INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- messages
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL,  -- 'user' | 'assistant'
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- saves (для компакта)
CREATE TABLE saves (
  id SERIAL PRIMARY KEY,
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- indexes
CREATE INDEX idx_sessions_user ON sessions(telegram_user_id);
CREATE INDEX idx_messages_session ON messages(session_id);
```

---

## API Endpoints

### Session
```
POST /api/session/start
  Body: { telegramUserId: number }
  Response: { sessionId: string, welcome: string }

GET /api/session/:id
  Response: { session, messages[] }
```

### Message
```
POST /api/message
  Body: { sessionId: string, text: string }
  Response: {
    content: string,
    contextPct: number,
    compacted: boolean
  }
```

### Commands
```
GET /api/command/:cmd?sessionId=xxx
  cmd: sheet | npc | map | factions | chapter | recap
  Response: { content: string }
```

### Context
```
GET /api/context?sessionId=xxx
  Response: { pct: number, tokens: number }
```

---

## Claude CLI Service

**Dockerfile:**
```dockerfile
FROM node:20-slim

RUN npm install -g @anthropic-ai/claude-code

WORKDIR /app
COPY server.js .

EXPOSE 3001
CMD ["node", "server.js"]
```

**server.js:**
```javascript
const http = require('http');
const { spawn } = require('child_process');

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/send') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { message, sessionId } = JSON.parse(body);

      const args = ['-p', message, '--print', '--dangerously-skip-permissions'];
      if (sessionId) args.push('--resume', sessionId);

      const proc = spawn('claude', args, {
        cwd: process.env.PROJECT_DIR,
        shell: true
      });

      let stdout = '';
      let stderr = '';

      proc.stdout.on('data', d => stdout += d);
      proc.stderr.on('data', d => stderr += d);

      proc.on('close', code => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          response: stdout.trim(),
          error: code !== 0 ? stderr : null
        }));
      });
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3001, () => {
  console.log('Claude CLI service running on :3001');
});
```

---

## Auto-Compaction Flow

```
1. После каждого ответа Claude:
   - Читаем usage из ~/.claude/projects/.../session.jsonl
   - Считаем contextPct = cache_tokens / 200000

2. Если contextPct >= 0.80:
   a. POST /send { message: "/rp:save" }
   b. Сохраняем save content в БД
   c. POST /send { message: "/rp:load" } (новая сессия)
   d. Обновляем claude_session_id в БД

3. Возвращаем клиенту:
   - compacted: true
   - Новый contextPct
```

---

## Frontend Components

### Tabs
- game: Чат с игрой
- sheet: /rp:sheet
- npc: /rp:npc
- map: /rp:map
- factions: /rp:factions

При клике на таб (кроме game):
1. Показать loader
2. GET /api/command/:tab
3. Рендерить MD

### Chat
- Список сообщений (user/assistant)
- Input field + Send button
- Loader при ожидании ответа

### Context Indicator
- Прогресс-бар % контекста
- Цвета: green <50%, yellow 50-80%, red >80%
- Toast при компакте

---

## Telegram Mini App

```javascript
// Инициализация
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Тема
const root = document.documentElement;
root.style.setProperty('--tg-bg', tg.themeParams.bg_color);
root.style.setProperty('--tg-text', tg.themeParams.text_color);
root.style.setProperty('--tg-hint', tg.themeParams.hint_color);
root.style.setProperty('--tg-button', tg.themeParams.button_color);

// User
const userId = tg.initDataUnsafe?.user?.id;
```

---

## Environment Variables

```env
# Postgres
PG_USER=questkeeper
PG_PASS=secretpassword

# PgAdmin
PGADMIN_EMAIL=admin@local.dev
PGADMIN_PASS=admin

# Cloudflare Tunnel
CF_TUNNEL_TOKEN=xxx

# App
NODE_ENV=development
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | TypeScript, Vite, marked.js |
| Backend | NestJS, TypeScript |
| Database | PostgreSQL 16 |
| ORM | Sequelize + sequelize-typescript |
| Claude | CLI in container |
| Proxy | Nginx |
| Tunnel | Cloudflare |
| Container | Docker Compose |

---

## Backend Structure (NestJS)

```
backend/src/
├── main.ts
├── app.module.ts
│
├── session/
│   ├── session.module.ts
│   ├── session.controller.ts
│   ├── session.service.ts
│   └── session.model.ts
│
├── message/
│   ├── message.module.ts
│   ├── message.controller.ts
│   ├── message.service.ts
│   └── message.model.ts
│
├── command/
│   ├── command.module.ts
│   ├── command.controller.ts
│   └── command.service.ts
│
├── claude/
│   ├── claude.module.ts
│   └── claude.service.ts
│
├── compaction/
│   ├── compaction.module.ts
│   └── compaction.service.ts
│
└── database/
    ├── database.module.ts
    └── database.providers.ts
```

---

## Sequelize Models

```typescript
// session.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Message } from '../message/message.model';

@Table({ tableName: 'sessions', timestamps: true })
export class Session extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.BIGINT, allowNull: false })
  telegramUserId: number;

  @Column({ type: DataType.STRING })
  claudeSessionId: string;

  @Column({ type: DataType.STRING(100) })
  ruleset: string;

  @Column({ type: DataType.DECIMAL(5, 4), defaultValue: 0 })
  contextPct: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  compactions: number;

  @HasMany(() => Message)
  messages: Message[];
}

// message.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Session } from '../session/session.model';

@Table({ tableName: 'messages', timestamps: true })
export class Message extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Session)
  @Column({ type: DataType.UUID })
  sessionId: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  role: 'user' | 'assistant';

  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @BelongsTo(() => Session)
  session: Session;
}
```

---

## NestJS Controllers

```typescript
// session.controller.ts
@Controller('api/session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Post('start')
  async start(@Body() dto: StartSessionDto) {
    return this.sessionService.create(dto.telegramUserId);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.sessionService.findOne(id);
  }
}

// message.controller.ts
@Controller('api/message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  async send(@Body() dto: SendMessageDto) {
    return this.messageService.send(dto.sessionId, dto.text);
  }
}

// command.controller.ts
@Controller('api/command')
export class CommandController {
  constructor(private commandService: CommandService) {}

  @Get(':cmd')
  async execute(
    @Param('cmd') cmd: string,
    @Query('sessionId') sessionId: string,
  ) {
    return this.commandService.execute(sessionId, cmd);
  }
}
```

---

## Claude Service

```typescript
// claude.service.ts
@Injectable()
export class ClaudeService {
  private readonly claudeUrl = process.env.CLAUDE_SERVICE_URL;

  async send(message: string, sessionId?: string): Promise<ClaudeResponse> {
    const response = await fetch(`${this.claudeUrl}/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sessionId }),
    });
    return response.json();
  }
}
```

---

## Development Workflow

```bash
# Start all services
docker-compose up -d

# Watch logs
docker-compose logs -f

# Rebuild specific service
docker-compose up -d --build backend

# Access pgAdmin
open http://localhost:5050

# Tunnel URL (from cloudflared logs)
docker-compose logs tunnel | grep "https://"
```

---

## TODO

- [ ] Создать docker-compose.yml
- [ ] Настроить Cloudflare Tunnel
- [ ] Frontend: базовый UI с табами
- [ ] Backend: API endpoints
- [ ] Claude CLI service
- [ ] Database migrations
- [ ] Auto-compaction logic
- [ ] Telegram Mini App integration
