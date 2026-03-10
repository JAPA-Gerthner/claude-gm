<script setup lang="ts">
import { ref, reactive, computed, nextTick, watch, onMounted, onUnmounted } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

// Configure marked to respect single line breaks
marked.setOptions({
  breaks: true, // Convert \n to <br>
  gfm: true,    // GitHub Flavored Markdown
})
import { getGameSocket, type GameSocket } from '../socket/client'
import type { ChatMessageResponse } from '../gen/questkeeper/v1/questkeeper_pb'

const props = defineProps<{
  token: string
  gameSessionId: string
  userName?: string
  userAvatar?: string
}>()

interface Message {
  id?: string
  role: 'user' | 'assistant'
  content: string
  senderName?: string
  senderAvatar?: string
  createdAt?: string
}

const messages = ref<Message[]>([])
const inputValue = ref('')
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Socket client
let socket: GameSocket | null = null

// Selections for clickable options (exclusive per tag)
const selections = reactive<Record<string, string>>({})

// Build input preview from selections
const selectionsPreview = computed(() => {
  const vals = Object.values(selections)
  return vals.length ? vals.join(', ') : ''
})

// Index of last assistant message (only this one should be interactive)
const lastAssistantIndex = computed(() => {
  for (let i = messages.value.length - 1; i >= 0; i--) {
    if (messages.value[i].role === 'assistant') return i
  }
  return -1
})

// Auto-resize textarea
function resizeTextarea() {
  const el = textareaRef.value
  if (el) {
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 150) + 'px'
  }
}

watch(inputValue, resizeTextarea)

// Initialize socket and load history
onMounted(() => {
  initSocket()
})

onUnmounted(() => {
  socket?.disconnect()
})

function initSocket() {
  socket = getGameSocket(props.token)

  // Register handlers BEFORE connecting to avoid race conditions
  socket.on('onChatMessage', handleChatMessage)
  socket.on('onConnect', async () => {
    await joinRoom()
    await loadHistory()
  })

  socket.connect()

  // If already connected (unlikely but possible), join and load immediately
  if (socket.isConnected()) {
    joinRoom().then(() => loadHistory())
  }
}

async function joinRoom() {
  if (!socket) return
  console.log('[ChatScreen] Socket connected, joining room...')
  try {
    const res = await socket.joinRoom(props.gameSessionId)
    if (res.success) {
      console.log('[ChatScreen] Joined room, members:', res.members.length)
    } else {
      console.error('[ChatScreen] Failed to join room:', res.error)
    }
  } catch (err) {
    console.error('[ChatScreen] Join room error:', err)
  }
}

function handleChatMessage(msg: ChatMessageResponse) {
  // Skip if we already added this message locally (user's own message)
  const isDuplicate = messages.value.some(
    m => m.id === msg.messageId ||
    (m.role === msg.role && m.content === msg.content && !m.id)
  )
  if (isDuplicate) return

  // Assistant message arrived - stop loading
  if (msg.role === 'assistant') {
    isLoading.value = false
    emit('sessionUpdated')
  }

  messages.value.push({
    id: msg.messageId,
    role: msg.role as 'user' | 'assistant',
    content: msg.content,
    senderName: msg.senderName,
    senderAvatar: msg.senderAvatar || undefined,
    createdAt: new Date(Number(msg.timestamp)).toISOString(),
  })
  scrollToBottom()
}

async function loadHistory() {
  try {
    const res = await fetch(`/api/chat/history/${props.gameSessionId}`, {
      headers: { Authorization: `Bearer ${props.token}` },
    })
    if (res.ok) {
      const data = await res.json()
      if (data.messages && data.messages.length > 0) {
        messages.value = data.messages
        scrollToBottom()
        return
      }
    }
  } catch (err) {
    console.error('Failed to load history:', err)
  }
  // No history - start new session
  sendMessage('/rp:start')
}

function renderMarkdown(content: string): string {
  const html = marked.parse(content) as string
  return DOMPurify.sanitize(html)
}

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const emit = defineEmits<{
  sessionUpdated: []
}>()

function sendMessage(message: string) {
  sendMessageWithDisplay(message, message)
}

function sendMessageWithDisplay(messageToSend: string, messageToDisplay: string) {
  if (!messageToSend.trim() || isLoading.value) return
  if (!socket?.isConnected()) {
    console.error('[ChatScreen] Socket not connected')
    return
  }

  // Add user message locally (socket will broadcast to room)
  messages.value.push({
    role: 'user',
    content: messageToDisplay,
    senderName: props.userName || 'Player',
    senderAvatar: props.userAvatar,
    createdAt: new Date().toISOString(),
  })
  inputValue.value = ''
  // Clear selections after sending
  Object.keys(selections).forEach(k => delete selections[k])
  // Clear all .selected classes
  messagesContainer.value?.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'))
  scrollToBottom()
  resizeTextarea()

  isLoading.value = true

  // Send via socket - response will come through streaming chunks
  socket.sendMessage(
    props.gameSessionId,
    messageToSend,
    messageToDisplay !== messageToSend ? messageToDisplay : undefined,
  )
}

function handleSubmit() {
  const hasSelections = Object.keys(selections).length > 0
  const hasText = inputValue.value.trim().length > 0

  if (!hasSelections && !hasText) return

  // Format for Claude (simple, no markdown)
  const claudeParts: string[] = []
  if (hasSelections) {
    const selectionValues = Object.values(selections).join(', ')
    claudeParts.push(selectionValues)
  }
  if (hasText) {
    claudeParts.push(inputValue.value.trim())
  }
  const claudeMsg = claudeParts.join('\n\n')

  // Format for display (markdown blockquote for selections)
  const displayParts: string[] = []
  if (hasSelections) {
    const selectionLines = Object.entries(selections)
      .map(([tag, value]) => `> **${tag}:** ${value}  `)
      .join('\n')
    displayParts.push(selectionLines)
  }
  if (hasText) {
    displayParts.push(inputValue.value.trim())
  }
  const displayMsg = displayParts.join('\n\n')

  // Show formatted message in UI, send simple message to Claude
  sendMessageWithDisplay(claudeMsg, displayMsg)
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
}

function handleSelectClick(e: Event) {
  const link = (e.target as HTMLElement).closest('a[href^="#select:"]')
  if (!link) return

  // Ignore clicks while loading
  if (isLoading.value) {
    e.preventDefault()
    return
  }

  // Ignore clicks on old messages
  const messageEl = link.closest('.message')
  if (messageEl?.classList.contains('message-old')) {
    e.preventDefault()
    return
  }

  e.preventDefault()
  const href = link.getAttribute('href')!
  // Format: #select:tag:value
  const match = href.match(/#select:([^:]+):(.+)/)
  if (!match) return

  const [, tag, encodedValue] = match
  const value = decodeURIComponent(encodedValue)

  // Clear previous selection in same tag
  messagesContainer.value
    ?.querySelectorAll(`a[href^="#select:${tag}:"].selected`)
    .forEach(el => el.classList.remove('selected'))

  // Exclusive selection: replace previous value for this tag
  selections[tag] = value

  // Visual feedback
  link.classList.add('selected')
}

function removeSelection(tag: string) {
  delete selections[tag]
  // Remove visual selection
  messagesContainer.value
    ?.querySelectorAll(`a[href^="#select:${tag}:"].selected`)
    .forEach(el => el.classList.remove('selected'))
}

function formatTime(dateStr?: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
}

function getInitials(name?: string): string {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}
</script>

<template>
  <div class="chat-panel">
    <div ref="messagesContainer" :class="['messages', { 'messages-loading': isLoading }]" @click="handleSelectClick">
      <div
        v-for="(msg, i) in messages"
        :key="msg.id || i"
        :class="['message', `message-${msg.role}`, { 'message-old': msg.role === 'assistant' && (i !== lastAssistantIndex || isLoading) }]"
      >
        <div class="message-header">
          <div class="message-header-left">
            <div class="message-avatar" v-if="msg.senderAvatar">
              <img :src="msg.senderAvatar" :alt="msg.senderName" />
            </div>
            <div class="message-avatar message-avatar-initials" v-else>
              {{ getInitials(msg.senderName) }}
            </div>
            <span class="message-sender">{{ msg.senderName || (msg.role === 'assistant' ? 'Game Master' : 'Player') }}</span>
          </div>
          <span class="message-time" v-if="msg.createdAt">{{ formatTime(msg.createdAt) }}</span>
        </div>
        <div class="message-content" v-html="renderMarkdown(msg.content)"></div>
      </div>

      <!-- Loading indicator -->
      <div v-if="isLoading" class="message message-assistant message-skeleton">
        <div class="skeleton-line skeleton-short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line skeleton-medium"></div>
      </div>
    </div>

    <!-- Selection chips -->
    <div v-if="Object.keys(selections).length" class="selections-bar">
      <span
        v-for="(value, tag) in selections"
        :key="tag"
        class="selection-chip"
        @click="removeSelection(tag as string)"
      >
        {{ value }} ×
      </span>
    </div>

    <form class="chat-form" @submit.prevent="handleSubmit">
      <textarea
        ref="textareaRef"
        v-model="inputValue"
                autocomplete="off"
        :disabled="isLoading"
        rows="1"
        @keydown="handleKeydown"
      ></textarea>
      <button type="submit" :disabled="isLoading">➤</button>
    </form>
  </div>
</template>

<style scoped>
.chat-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.chat-form textarea {
  flex: 1;
  padding: 14px 18px;
  border: 2px solid var(--border-frame);
  border-radius: 4px;
  background: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  outline: none;
  resize: none;
  min-height: 52px;
  max-height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
  line-height: 1.5;
  transition: border-color 0.2s;
  scrollbar-width: none; /* Firefox */
}

.chat-form textarea::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}


.chat-form textarea:focus {
  border-color: var(--accent-gold);
}

.chat-form textarea:disabled {
  opacity: 0.5;
}

/* Clickable select links in assistant messages */
.message-assistant :deep(a[href^="#select:"]) {
  cursor: pointer;
  padding: 3px 8px;
  border-radius: 3px;
  background: rgba(201, 162, 39, 0.1);
  border: 1px solid transparent;
  transition: all 0.2s ease;
  color: var(--accent-gold);
  text-decoration: none;
}

.message-assistant :deep(a[href^="#select:"]:hover) {
  background: rgba(201, 162, 39, 0.25);
  text-decoration: none;
  border-color: var(--accent-gold);
  box-shadow: 0 0 8px rgba(201, 162, 39, 0.3);
}

.message-assistant :deep(a[href^="#select:"].selected) {
  background: var(--accent-gold);
  color: var(--bg-dark);
  box-shadow: 0 0 12px rgba(201, 162, 39, 0.5);
  font-weight: 600;
}

/* Old assistant messages - disable link interactions */
.message-old :deep(a[href^="#select:"]) {
  color: var(--text-secondary);
  pointer-events: none;
  text-decoration: none;
  opacity: 0.6;
}

/* Disable all select links while loading */
.messages-loading :deep(a[href^="#select:"]) {
  color: var(--text-secondary);
  pointer-events: none;
  text-decoration: none;
  opacity: 0.6;
}


/* Message header with avatar */
.message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.message-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.message-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-avatar-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark);
  color: var(--accent-gold);
  font-family: 'Cinzel', serif;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid var(--border-frame);
}

.message-assistant .message-avatar {
  border: 2px solid var(--accent-gold);
  box-shadow: 0 0 8px rgba(201, 162, 39, 0.3);
}

.message-sender {
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-gm);
}

.message-user .message-sender {
  color: var(--text-primary);
}

.message-time {
  font-size: 12px;
  color: var(--text-secondary);
}

.message-content {
  /* Content in its own block, full width */
}

/* Mobile */
@media (max-width: 767.98px) {
  .message-avatar {
    width: 28px;
    height: 28px;
  }

  .message-avatar-initials {
    font-size: 10px;
  }

  .message-sender {
    font-size: 12px;
  }

  .message-time {
    font-size: 11px;
  }

  .message-header {
    margin-bottom: 8px;
  }

  .message-header-left {
    gap: 8px;
  }

  .chat-form textarea {
    padding: 12px 14px;
    min-height: 48px;
    font-size: 16px; /* Prevents iOS zoom */
  }

  .chat-form button[type="submit"] {
    width: 48px;
    min-height: 48px;
  }
}
</style>
