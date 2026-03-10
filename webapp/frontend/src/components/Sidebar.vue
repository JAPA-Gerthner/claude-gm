<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  token: string
  activeSessionId: string | null
}>()

// Context menu state
const contextMenu = reactive({
  visible: false,
  x: 0,
  y: 0,
  sessionId: '',
  sessionName: '',
})

// Rename modal state
const renameModal = reactive({
  visible: false,
  sessionId: '',
  newName: '',
})

// Delete modal state
const deleteModal = reactive({
  visible: false,
  sessionId: '',
  sessionName: '',
})

const emit = defineEmits<{
  selectSession: [id: string]
  newGame: []
}>()

interface GameSession {
  id: string
  name: string | null
  ruleset: string
  rulesetDisplay: string | null
  characterName: string | null
  tokenCount: number
  updatedAt: string
}

interface SessionEvent {
  sessionId: string
  type: 'updated' | 'deleted'
  data?: Partial<GameSession>
}

const sessions = ref<GameSession[]>([])
const isLoading = ref(true)
const isCollapsed = ref(window.innerWidth < 992) // Auto-collapse on tablet and below
const isMobile = ref(window.innerWidth < 992)
let prevWidth = window.innerWidth
let eventSource: EventSource | null = null

const MAX_TOKENS = 180000 // Claude context limit

function handleResize() {
  const width = window.innerWidth
  const wasMobile = prevWidth < 992
  const nowMobile = width < 992

  isMobile.value = nowMobile

  // Only collapse when crossing breakpoint downward (screen getting smaller)
  if (!wasMobile && nowMobile) {
    isCollapsed.value = true
  }

  prevWidth = width
}

onMounted(() => {
  loadSessions()
  subscribeToEvents()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', hideContextMenu)
})

onUnmounted(() => {
  if (eventSource) {
    eventSource.close()
  }
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', hideContextMenu)
})

function subscribeToEvents() {
  // SSE requires auth in URL since EventSource doesn't support headers
  eventSource = new EventSource(`/api/game-sessions/subscribe?token=${props.token}`)

  eventSource.onmessage = (event) => {
    const data: SessionEvent = JSON.parse(event.data)
    handleSessionEvent(data)
  }

  eventSource.onerror = () => {
    // Reconnect after 5 seconds
    setTimeout(() => {
      if (eventSource) {
        eventSource.close()
        subscribeToEvents()
      }
    }, 5000)
  }
}

function handleSessionEvent(event: SessionEvent) {
  const index = sessions.value.findIndex(s => s.id === event.sessionId)

  if (event.type === 'deleted') {
    if (index !== -1) {
      sessions.value.splice(index, 1)
    }
  } else if (event.type === 'updated' && event.data) {
    if (index !== -1) {
      // Update existing session
      Object.assign(sessions.value[index], event.data)
    } else {
      // New session, reload list
      loadSessions()
    }
  }
}

async function loadSessions() {
  isLoading.value = true
  try {
    const res = await fetch('/api/game-sessions', {
      headers: { Authorization: `Bearer ${props.token}` },
    })
    if (res.ok) {
      sessions.value = await res.json()
    }
  } finally {
    isLoading.value = false
  }
}

function getSessionName(session: GameSession): string {
  const ruleset = session.rulesetDisplay || session.ruleset
  if (session.name) return session.name
  if (session.characterName) return `${session.characterName} (${ruleset})`
  return ruleset
}

function getTokenPercent(tokenCount: number): number {
  return Math.min(100, Math.round((tokenCount / MAX_TOKENS) * 100))
}

function getTokenColor(percent: number): string {
  if (percent < 50) return 'var(--accent-green)'
  if (percent < 80) return 'var(--accent-gold)'
  return 'var(--accent-red)'
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return 'Сегодня'
  if (days === 1) return 'Вчера'
  if (days < 7) return `${days} дн. назад`
  return date.toLocaleDateString('ru-RU')
}

// Context menu functions
function showContextMenu(e: MouseEvent, session: GameSession) {
  e.preventDefault()
  contextMenu.visible = true
  contextMenu.x = e.clientX
  contextMenu.y = e.clientY
  contextMenu.sessionId = session.id
  contextMenu.sessionName = getSessionName(session)
}

function hideContextMenu() {
  contextMenu.visible = false
}

function openRenameModal() {
  renameModal.sessionId = contextMenu.sessionId
  renameModal.newName = contextMenu.sessionName
  renameModal.visible = true
  hideContextMenu()
}

async function submitRename() {
  if (!renameModal.newName.trim()) return

  try {
    const res = await fetch(`/api/game-sessions/${renameModal.sessionId}/name`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({ name: renameModal.newName.trim() }),
    })
    if (res.ok) {
      const index = sessions.value.findIndex(s => s.id === renameModal.sessionId)
      if (index !== -1) {
        sessions.value[index].name = renameModal.newName.trim()
      }
    }
  } catch (err) {
    console.error('Failed to rename session:', err)
  }
  renameModal.visible = false
}

function openDeleteModal() {
  deleteModal.sessionId = contextMenu.sessionId
  deleteModal.sessionName = contextMenu.sessionName
  deleteModal.visible = true
  hideContextMenu()
}

async function confirmDelete() {
  try {
    const res = await fetch(`/api/game-sessions/${deleteModal.sessionId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${props.token}` },
    })
    if (res.ok) {
      sessions.value = sessions.value.filter(s => s.id !== deleteModal.sessionId)
      if (props.activeSessionId === deleteModal.sessionId) {
        emit('selectSession', '')
      }
    }
  } catch (err) {
    console.error('Failed to delete session:', err)
  }
  deleteModal.visible = false
}

defineExpose({ loadSessions })
</script>

<template>
  <!-- Mobile/tablet toggle button - only when collapsed -->
  <button v-if="isMobile && isCollapsed" class="mobile-toggle" @click="isCollapsed = false">
    ☰
  </button>

  <aside :class="['sidebar', { collapsed: isCollapsed }]">
    <!-- Collapsed state on desktop: just toggle button -->
    <button v-if="isCollapsed && !isMobile" class="expand-btn" @click="isCollapsed = false" title="Открыть панель">
      ☰
    </button>

    <!-- Full sidebar content -->
    <template v-if="!isCollapsed">
      <div class="sidebar-header">
        <span class="sidebar-title">Sessions</span>
        <button class="collapse-btn" @click="isCollapsed = true" title="Свернуть">
          ✕
        </button>
      </div>

      <button class="new-game-btn" @click="$emit('newGame')">
        New Game
      </button>

    <div v-if="isLoading && !isCollapsed" class="loading">Загрузка...</div>

    <div v-else-if="!isCollapsed" class="sessions-container">
      <!-- Solo Sessions -->
      <div class="session-section">
        <div class="section-header">
          <span class="section-icon">&#9876;</span>
          <span class="section-title">Solo</span>
        </div>
        <ul class="session-list">
          <li
            v-for="session in sessions"
            :key="session.id"
            :class="['session-item', { active: session.id === activeSessionId }]"
            @click="$emit('selectSession', session.id)"
            @contextmenu.prevent="showContextMenu($event, session)"
          >
            <div class="session-name">{{ getSessionName(session) }}</div>
            <div class="session-meta">
              <span class="session-date">{{ formatDate(session.updatedAt) }}</span>
              <div class="token-bar">
                <div
                  class="token-fill"
                  :style="{
                    width: getTokenPercent(session.tokenCount) + '%',
                    backgroundColor: getTokenColor(getTokenPercent(session.tokenCount))
                  }"
                ></div>
              </div>
            </div>
          </li>
        </ul>
        <div v-if="sessions.length === 0" class="empty-section">
          Нет активных сессий
        </div>
      </div>

      <!-- Group Sessions -->
      <div class="session-section">
        <div class="section-header">
          <span class="section-icon">&#9819;</span>
          <span class="section-title">Multiplayer</span>
          <span class="section-badge">soon</span>
        </div>
        <div class="empty-section">
          Coming soon
        </div>
      </div>
    </div>
    </template>
  </aside>

  <!-- Context Menu -->
  <Teleport to="body">
    <div
      v-if="contextMenu.visible"
      class="context-menu"
      :style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
      @click.stop
    >
      <button class="context-menu-item" @click="openRenameModal">
        Rename
      </button>
      <button class="context-menu-item" disabled>
        Fork
      </button>
      <button class="context-menu-item context-menu-danger" @click="openDeleteModal">
        Delete
      </button>
    </div>
  </Teleport>

  <!-- Rename Modal -->
  <Teleport to="body">
    <div v-if="renameModal.visible" class="modal-overlay" @click="renameModal.visible = false">
      <div class="modal" @click.stop>
        <h3>Rename Session</h3>
        <input
          v-model="renameModal.newName"
          type="text"
          class="modal-input"
          @keydown.enter="submitRename"
          autofocus
        />
        <div class="modal-actions">
          <button class="modal-btn modal-btn-cancel" @click="renameModal.visible = false">Cancel</button>
          <button class="modal-btn modal-btn-confirm" @click="submitRename">Save</button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Delete Modal -->
  <Teleport to="body">
    <div v-if="deleteModal.visible" class="modal-overlay" @click="deleteModal.visible = false">
      <div class="modal" @click.stop>
        <h3>Delete Session</h3>
        <p class="modal-text">Delete <strong>{{ deleteModal.sessionName }}</strong>?</p>
        <p class="modal-warning">This action cannot be undone.</p>
        <div class="modal-actions">
          <button class="modal-btn modal-btn-cancel" @click="deleteModal.visible = false">Cancel</button>
          <button class="modal-btn modal-btn-danger" @click="confirmDelete">Delete</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.sidebar {
  width: 280px;
  min-width: 280px;
  background: var(--bg-panel);
  border-right: 2px solid var(--border-frame);
  display: flex;
  flex-direction: column;
  transition: width 0.2s, min-width 0.2s;
}

/* Collapsed state - thin bar with toggle */
.sidebar.collapsed {
  width: 48px;
  min-width: 48px;
}

/* Expand button when collapsed */
.expand-btn {
  width: 100%;
  height: 48px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--border-frame);
  color: var(--text-secondary);
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-btn:hover {
  background: var(--bg-chat);
  color: var(--accent-gold);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-frame);
}

.sidebar-title {
  font-family: 'Cinzel', serif;
  font-size: 1.2em;
  font-weight: 600;
  color: var(--text-gm);
}

.collapse-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.2s;
}

.collapse-btn:hover {
  color: var(--accent-gold);
}


.new-game-btn {
  margin: 16px;
  padding: 16px 20px;
  background: linear-gradient(135deg, var(--accent-gold) 0%, #b8860b 100%);
  color: var(--bg-dark);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  font-family: 'Cinzel', serif;
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.new-game-btn:hover {
  background: linear-gradient(135deg, #e6be44 0%, var(--accent-gold) 100%);
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow:
    0 4px 16px rgba(201, 162, 39, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.new-game-btn:active {
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.loading {
  padding: 16px;
  color: var(--text-secondary);
  text-align: center;
}

.sessions-container {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.session-section {
  border-bottom: 1px solid var(--border-frame);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--bg-dark);
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-icon {
  color: var(--accent-gold);
  font-size: 14px;
}

.section-title {
  color: var(--text-secondary);
  font-weight: 600;
}

.section-badge {
  margin-left: auto;
  padding: 2px 6px;
  background: var(--bg-chat);
  border-radius: 3px;
  font-size: 10px;
  color: var(--text-secondary);
}

.empty-section {
  padding: 12px 16px;
  color: var(--text-secondary);
  font-size: 0.85em;
  font-style: italic;
}

.session-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.session-item {
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-frame);
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.session-item:hover {
  background: var(--bg-chat);
  border-left-color: var(--text-secondary);
  padding-left: 18px;
}

.session-item.active {
  background: var(--bg-chat);
  border-left-color: var(--accent-gold);
  box-shadow: inset 0 0 20px rgba(201, 162, 39, 0.1);
}

.session-name {
  font-weight: 600;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.session-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85em;
  color: var(--text-secondary);
}

.session-date {
  flex-shrink: 0;
}

.token-bar {
  flex: 1;
  height: 4px;
  background: var(--bg-dark);
  border-radius: 2px;
  overflow: hidden;
}

.token-fill {
  height: 100%;
  transition: width 0.3s;
}

/* Mobile toggle button - below header, left edge */
.mobile-toggle {
  position: fixed;
  left: 0;
  top: 50px; /* Below header */
  z-index: 150;
  background: var(--bg-panel);
  border: 1px solid var(--border-frame);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding: 10px 12px;
  font-size: 16px;
  color: var(--text-secondary);
  cursor: pointer;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
}

.mobile-toggle:hover {
  color: var(--accent-gold);
  background: var(--bg-chat);
}

/* Tablet and mobile - sidebar as overlay below header */
@media (max-width: 991.98px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 50px; /* Below header */
    bottom: 0;
    z-index: 100;
    width: 280px;
    min-width: 280px;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.25s ease;
  }

  .sidebar.collapsed {
    transform: translateX(-280px);
    box-shadow: none;
  }
}

/* Context Menu */
.context-menu {
  position: fixed;
  z-index: 1000;
  background: var(--bg-panel);
  border: 1px solid var(--border-frame);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  min-width: 120px;
  padding: 4px 0;
}

.context-menu-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;
}

.context-menu-item:hover:not(:disabled) {
  background: var(--bg-chat);
}

.context-menu-item:disabled {
  color: var(--text-secondary);
  opacity: 0.5;
  cursor: not-allowed;
}

.context-menu-danger {
  color: #e55;
}

.context-menu-danger:hover:not(:disabled) {
  background: rgba(204, 68, 68, 0.15);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: var(--bg-panel);
  border: 2px solid var(--border-frame);
  border-radius: 8px;
  padding: 24px;
  min-width: 300px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.modal h3 {
  margin: 0 0 16px;
  font-family: 'Cinzel', serif;
  color: var(--text-gm);
}

.modal-input {
  width: 100%;
  padding: 10px 12px;
  background: var(--bg-dark);
  border: 1px solid var(--border-frame);
  border-radius: 4px;
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.modal-input:focus {
  border-color: var(--accent-gold);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.modal-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-btn-cancel {
  background: none;
  border: 1px solid var(--border-frame);
  color: var(--text-secondary);
}

.modal-btn-cancel:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.modal-btn-confirm {
  background: var(--accent-gold);
  border: none;
  color: var(--bg-dark);
  font-weight: 600;
}

.modal-btn-confirm:hover {
  background: #e6be44;
}

.modal-text {
  margin: 0 0 8px;
  color: var(--text-primary);
}

.modal-warning {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
}

.modal-btn-danger {
  background: #c44;
  border: none;
  color: #fff;
  font-weight: 600;
}

.modal-btn-danger:hover {
  background: #e55;
}
</style>
