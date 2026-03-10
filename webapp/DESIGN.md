# Quest Keeper Web App — Design Document

## Overview

Web-приложение для текстовой RPG с Claude как Game Master.

## Roadmap

| Version | Scope |
|---------|-------|
| **v0.5** | Bare minimum: чат с Claude, /rp команды вручную |
| **v1.0** | Табы, Main Menu, сохранения |
| **v1.5** | RPG стилизация: тема, шрифты, иконки |
| **v2.0** | Мультиплеер: 2-4 игрока в одной сессии |

**v0.5 Фичи (MVP):** ✅
- Web app с одним экраном: чат
- Ввод → Claude → ответ (MD rendered)
- /rp, /rp:sheet, /rp:save и т.п. — руками как в терминале
- Casdoor OIDC auth
- Одна сессия на юзера (auto-resume)
- Sidebar со списком сессий

**v1.0 Фичи:** ✅
- Main Menu: New / Continue / Load
- Табы: Игра / Шит / NPC / Карта / Фракции
- UI для сохранений
- Выбор рульсета при старте

**v1.5 Фичи:** ✅
- RPG тема (цвета, шрифты, иконки)
- HP-style context bar
- Анимации

**v2.0 Фичи:**
- WebSocket для real-time синхронизации
- Shared session между игроками
- Индикация кто сейчас действует
- Invite system

---

## Архитектура

```
┌──────────────────────────────────────────────────────────────┐
│                      DOCKER COMPOSE                          │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────────┐  │
│  │ frontend │  │ backend  │  │ postgres │  │ claude-cli  │  │
│  │  :5173   │  │  :3000   │──│  :5432   │  │   :3001     │  │
│  └──────────┘  └────┬─────┘  └──────────┘  └──────┬──────┘  │
│                     │                             │         │
│                     └──────── Connect RPC ────────┘         │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │  nginx   │  │ casdoor  │  │ pgadmin  │                   │
│  │   :80    │  │  :8000   │  │  :5050   │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
│       │                                                      │
│       ▼                                                      │
│  ┌──────────────┐                                           │
│  │ cloudflared  │ ──▶ HTTPS tunnel                          │
│  └──────────────┘                                           │
│                                                              │
│  Volumes:                                                    │
│  - ~/.claude:/home/node/.claude (auth)                       │
│  - ./gm-skill:/app/gm-skill (project)                        │
│  - postgres_data (data)                                      │
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
│       ├── App.vue
│       ├── components/
│       │   ├── AuthScreen.vue
│       │   ├── ChatScreen.vue
│       │   ├── Sidebar.vue
│       │   ├── Header.vue
│       │   └── NewGameModal.vue
│       ├── socket/
│       │   └── client.ts
│       ├── api/
│       │   └── client.ts
│       └── gen/              # Generated from proto
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── main.ts
│       ├── app.module.ts
│       ├── auth/
│       │   ├── auth.module.ts
│       │   ├── auth.controller.ts
│       │   ├── auth.service.ts
│       │   └── auth.guard.ts
│       ├── chat/
│       │   ├── chat.module.ts
│       │   ├── chat.controller.ts
│       │   └── chat.service.ts
│       ├── game-session/
│       │   ├── game-session.module.ts
│       │   ├── game-session.controller.ts
│       │   ├── game-session.service.ts
│       │   └── session-events.service.ts
│       ├── claude/
│       │   ├── claude.module.ts
│       │   ├── claude.service.ts
│       │   └── session-compactor.ts
│       ├── socket/
│       │   ├── socket.module.ts
│       │   └── game.gateway.ts
│       ├── database/
│       │   ├── database.module.ts
│       │   ├── game-session.model.ts
│       │   └── message.model.ts
│       └── gen/              # Generated from proto
│
├── claude-cli/
│   ├── Dockerfile
│   ├── go.mod
│   ├── main.go
│   └── gen/                  # Generated from proto
│
├── proto/
│   ├── buf.yaml
│   ├── buf.gen.yaml
│   └── questkeeper/v1/
│       └── questkeeper.proto
│
├── nginx/
│   └── nginx.conf
│
├── casdoor/
│   └── app.conf
│
└── postgres/
    └── init-multi-db.sh
```

---

## Database Schema

```sql
-- game_sessions
CREATE TABLE game_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id VARCHAR(255) NOT NULL,           -- OIDC sub
  name VARCHAR(255),                        -- Session/chapter name

  -- Game settings
  ruleset VARCHAR(100) NOT NULL,
  ruleset_display VARCHAR(255),
  tone VARCHAR(50) DEFAULT 'medium',
  difficulty VARCHAR(50) DEFAULT 'standard',
  custom_mechanics BOOLEAN DEFAULT FALSE,

  -- Character
  character_name VARCHAR(255),
  character_class VARCHAR(255),

  -- Claude session
  claude_session_id VARCHAR(255),
  save_file_path VARCHAR(500),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES game_sessions(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL,               -- 'user' | 'assistant'
  sender_id VARCHAR(255),                  -- NULL for assistant
  sender_name VARCHAR(255),
  sender_avatar VARCHAR(500),
  content_sent TEXT NOT NULL,              -- What was sent to Claude
  content_display TEXT,                    -- Pretty version for UI (if different)
  is_compacted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- indexes
CREATE INDEX idx_sessions_user ON game_sessions(user_id);
CREATE INDEX idx_messages_session ON messages(session_id);
```

---

## API Endpoints

### Auth (Casdoor OIDC)

```
GET /api/auth/login
  → Redirect to Casdoor login page

GET /api/auth/callback?code=xxx&state=xxx
  → Exchange code for tokens, redirect to frontend with JWT

GET /api/auth/me
  Headers: Authorization: Bearer <token>
  Response: { sub, name, email, avatar }

GET /api/auth/logout
  → Redirect to frontend
```

### Game Sessions

```
GET /api/game-sessions
  Response: { sessions[] }

POST /api/game-sessions
  Body: { ruleset, tone, difficulty, customMechanics }
  Response: { session }

GET /api/game-sessions/:id
  Response: { session }

PATCH /api/game-sessions/:id
  Body: { name?, characterName?, ruleset? }
  Response: { session }

DELETE /api/game-sessions/:id
  Response: { success }
```

### Chat

```
GET /api/chat/history/:gameSessionId
  Response: { messages[] }

POST /api/chat/send
  Body: { gameSessionId, message, displayContent? }
  Response: { content, sessionId }
```

### Socket.IO Events

```typescript
// Client → Server
'joinRoom': { gameSessionId } → { success, members[] }
'leaveRoom': { gameSessionId }
'sendMessage': { gameSessionId, content, displayContent? }

// Server → Client
'chatMessage': { messageId, role, content, senderId, senderName, senderAvatar, timestamp }
'playerJoined': { gameSessionId, player }
'playerLeft': { gameSessionId, userId }
'sessionUpdated': { sessionId, data }
```

---

## Auth Flow (Casdoor OIDC)

```
┌─────────────┐     ┌─────────────┐     ┌──────────┐
│   Frontend  │     │   Backend   │     │ Casdoor  │
└──────┬──────┘     └──────┬──────┘     └────┬─────┘
       │                   │                  │
       │ Click Login       │                  │
       │──────────────────▶│                  │
       │                   │                  │
       │ Redirect to       │                  │
       │◀──────────────────│                  │
       │ Casdoor           │                  │
       │                   │                  │
       │───────────────────│─────────────────▶│
       │                   │    Login Page    │
       │                   │                  │
       │◀──────────────────│──────────────────│
       │  Callback with    │   code + state   │
       │  ?code=&state=    │                  │
       │──────────────────▶│                  │
       │                   │  Exchange code   │
       │                   │─────────────────▶│
       │                   │                  │
       │                   │◀─────────────────│
       │                   │  tokens + user   │
       │                   │                  │
       │ Redirect with JWT │                  │
       │◀──────────────────│                  │
       │ ?token=xxx        │                  │
       │                   │                  │
       │ Store token       │                  │
       │ in localStorage   │                  │
       └───────────────────┴──────────────────┘
```

---

## Claude CLI Service (Go + Connect RPC)

Прокси между NestJS и Claude CLI. Использует Connect RPC для типизированной коммуникации.

**Endpoints:**
- `ClaudeService.Send` — отправка сообщения, streaming ответ
- `ClaudeService.GetSessionStats` — статистика сессии (tokens, messages)
- `ClaudeService.GetSessionHistory` — история из .jsonl файла
- `ClaudeService.DeleteSession` — удаление файла сессии

**Особенности:**
- `sync.Mutex` — один запрос к Claude за раз (CLI не потокобезопасен)
- Session ID extraction — сравнение файлов до/после запуска
- h2c для HTTP/2 без TLS (Connect RPC streaming)

---

## Frontend Components

### App.vue
- Роутинг между AuthScreen и основным приложением
- Хранение токена в localStorage
- Верификация токена через /api/auth/me

### AuthScreen.vue
- Login кнопка → redirect to /api/auth/login

### Header.vue
- User info (name, avatar)
- Logout button

### Sidebar.vue
- Список сессий
- New Game кнопка
- Удаление сессий

### ChatScreen.vue
- WebSocket подключение
- История сообщений
- Markdown rendering (marked + DOMPurify)
- Clickable options (`#select:tag:value` links)
- Selection chips

---

## UI Style (RPG Theme)

### Палитра
```css
:root {
  /* Backgrounds */
  --bg-dark: #1a1410;
  --bg-panel: #2a1f1a;
  --bg-chat: #352a22;

  /* Text */
  --text-primary: #e8dcc4;
  --text-secondary: #a89880;
  --text-gm: #d4af37;

  /* Accents */
  --accent-gold: #c9a227;
  --accent-red: #8b2020;
  --accent-green: #2d5a27;

  /* Borders */
  --border-frame: #5a4a3a;
}
```

### Типографика
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

h1, h2, .tab-label { font-family: 'Cinzel', serif; }
body, .chat { font-family: 'Crimson+Text', serif; }
```

---

## Environment Variables

```env
# Postgres
PG_USER=postgres
PG_PASS=secretpassword

# Casdoor OIDC
CASDOOR_ISSUER=http://casdoor:8000
CASDOOR_CLIENT_ID=questkeeper-client
CASDOOR_CLIENT_SECRET=questkeeper-secret-2024
CASDOOR_REDIRECT_URI=http://localhost:8080/api/auth/callback

# App
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:8080
CLAUDE_SERVICE_URL=http://claude-cli:3001

# PgAdmin
PGADMIN_EMAIL=admin@local.dev
PGADMIN_PASS=admin
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vue 3, TypeScript, Vite, Socket.IO, marked.js, DOMPurify |
| Backend | NestJS, TypeScript, Socket.IO |
| Auth | Casdoor (OIDC), JWT |
| Database | PostgreSQL 16 |
| ORM | Sequelize + sequelize-typescript |
| RPC | Connect RPC (protobuf) |
| Claude Proxy | Go + Connect RPC |
| Reverse Proxy | Nginx |
| Tunnel | Cloudflare |
| Container | Docker Compose |

---

## Development

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

## v2.0 — Multiplayer Architecture

### Концепт
Claude как полноценный GM для группы 2-4 игроков. Каждый игрок видит общий чат, но управляет своим персонажем.

### Database Changes
```sql
-- Игроки в сессии
CREATE TABLE session_players (
  session_id UUID REFERENCES game_sessions(id),
  user_id VARCHAR(255) NOT NULL,
  character_name VARCHAR(100),
  is_host BOOLEAN DEFAULT FALSE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (session_id, user_id)
);
```

### WebSocket Events
```typescript
// Server → Client
'playerJoined': { gameSessionId, player }
'playerLeft': { gameSessionId, userId }
'turnChanged': { activePlayerId }

// Client → Server
'joinRoom': { gameSessionId }
```

### Invite System
```
POST /api/game-sessions/:id/invite → { code: "ABC123" }
GET  /api/game-sessions/join/:code → { sessionId }
```

---

## TODO

### v0.5 — Bare Minimum ✅
- [x] docker-compose.yml
- [x] Claude CLI service (Go + Connect RPC)
- [x] Backend: NestJS + Sequelize
- [x] Frontend: Vue 3 + Socket.IO
- [x] Casdoor OIDC auth
- [x] Chat with WebSocket
- [x] MD rendering

### v1.0 — Full MVP
- [ ] Main Menu screen
- [ ] Session/Save management UI
- [ ] Tabs (sheet, npc, map, factions)
- [ ] Ruleset selection modal
- [ ] Context indicator

### v1.5 — Styling
- [ ] RPG тема refinement
- [ ] Иконки табов
- [ ] HP-style context bar
- [ ] Анимации

### v2.0 — Multiplayer
- [ ] Session players table
- [ ] Invite system
- [ ] Real-time sync
- [ ] Turn indicators
