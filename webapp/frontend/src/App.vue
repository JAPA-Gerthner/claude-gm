<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AuthScreen from './components/AuthScreen.vue'
import ChatScreen from './components/ChatScreen.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import { disconnectGameSocket } from './socket/client'

const token = ref<string | null>(null)
const isLoading = ref(true)
const activeSessionId = ref<string | null>(null)
const sidebarRef = ref<InstanceType<typeof Sidebar> | null>(null)
const userName = ref<string | undefined>(undefined)
const userAvatar = ref<string | undefined>(undefined)

onMounted(async () => {
  // Check for token in URL (from OIDC callback)
  const params = new URLSearchParams(window.location.search)
  const urlToken = params.get('token')

  if (urlToken) {
    localStorage.setItem('qk_token', urlToken)
    window.history.replaceState({}, '', window.location.pathname)
    const valid = await verifyToken(urlToken)
    if (valid) {
      token.value = urlToken
    }
    isLoading.value = false
    return
  }

  // Check saved token
  const savedToken = localStorage.getItem('qk_token')
  if (savedToken) {
    const valid = await verifyToken(savedToken)
    if (valid) {
      token.value = savedToken
    } else {
      localStorage.removeItem('qk_token')
    }
  }
  isLoading.value = false
})

async function verifyToken(t: string): Promise<boolean> {
  try {
    const res = await fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${t}` },
    })
    if (res.ok) {
      const data = await res.json()
      userName.value = data.name || data.displayName || data.email
      userAvatar.value = data.avatar || data.picture
      return true
    }
    return false
  } catch {
    return false
  }
}

function handleLogin() {
  window.location.href = '/api/auth/login'
}

function handleLogout() {
  disconnectGameSocket()
  localStorage.removeItem('qk_token')
  token.value = null
  window.location.href = '/api/auth/logout'
}

function handleSelectSession(id: string) {
  activeSessionId.value = id
}

async function handleNewGame() {
  if (!token.value) return

  try {
    const res = await fetch('/api/game-sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({
        ruleset: 'pending', // Will be set via /rp:start
        tone: 'medium',
        difficulty: 'standard',
        customMechanics: false,
      }),
    })

    if (res.ok) {
      const session = await res.json()
      activeSessionId.value = session.id
      sidebarRef.value?.loadSessions()
    }
  } catch (err) {
    console.error('Failed to create session:', err)
  }
}

function handleSessionUpdated() {
  sidebarRef.value?.loadSessions()
}
</script>

<template>
  <div v-if="isLoading" class="screen">
    <div class="auth-container">
      <div class="loader"></div>
    </div>
  </div>
  <AuthScreen v-else-if="!token" @login="handleLogin" />
  <div v-else class="app-wrapper">
    <Header
      :user-name="userName"
      :user-avatar="userAvatar"
      @logout="handleLogout"
    />
    <div class="app-layout">
      <Sidebar
        ref="sidebarRef"
        :token="token"
        :active-session-id="activeSessionId"
        @select-session="handleSelectSession"
        @new-game="handleNewGame"
      />
      <main class="main-content">
        <ChatScreen
          v-if="activeSessionId"
          :key="activeSessionId"
          :token="token"
          :game-session-id="activeSessionId"
          :user-name="userName"
          :user-avatar="userAvatar"
          @session-updated="handleSessionUpdated"
        />
        <div v-else class="empty-state">
          <h2>Quest Keeper</h2>
          <p>Выбери сессию или создай новую игру</p>
          <button class="start-btn" @click="handleNewGame">New Game</button>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg-dark);
}

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.empty-state h2 {
  font-family: 'Cinzel', serif;
  font-size: 2em;
  color: var(--text-gm);
  margin-bottom: 10px;
}

.empty-state p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.start-btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, var(--accent-gold) 0%, #b8860b 100%);
  color: var(--bg-dark);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 6px;
  font-family: 'Cinzel', serif;
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.start-btn:hover {
  background: linear-gradient(135deg, #e6be44 0%, var(--accent-gold) 100%);
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow:
    0 4px 16px rgba(201, 162, 39, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
</style>
