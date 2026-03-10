<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  userName?: string
  userAvatar?: string
}>()

const emit = defineEmits<{
  logout: []
}>()

const showDropdown = ref(false)

function getInitials(name?: string): string {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}
</script>

<template>
  <header class="app-header">
    <div class="header-left">
      <div class="logo">
        <span class="logo-icon">&#9876;</span>
        <span class="logo-text">Quest Keeper</span>
      </div>
    </div>

    <div class="header-right">
      <div class="user-menu" @click="showDropdown = !showDropdown" v-click-outside="() => showDropdown = false">
        <div class="avatar" v-if="userAvatar">
          <img :src="userAvatar" :alt="userName" />
        </div>
        <div class="avatar avatar-initials" v-else>
          {{ getInitials(userName) }}
        </div>
        <span class="user-name">{{ userName || 'Adventurer' }}</span>
        <span class="dropdown-arrow">&#9662;</span>

        <div class="dropdown" v-if="showDropdown">
          <button class="dropdown-item" @click="$emit('logout')">
            <span class="dropdown-icon">&#10140;</span>
            Выйти
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 56px;
  background: var(--bg-panel);
  border-bottom: 2px solid var(--border-frame);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 24px;
  color: var(--accent-gold);
  text-shadow: 0 0 10px rgba(201, 162, 39, 0.5);
  animation: logoPulse 3s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% { text-shadow: 0 0 10px rgba(201, 162, 39, 0.5); }
  50% { text-shadow: 0 0 20px rgba(201, 162, 39, 0.8); }
}

.logo-text {
  font-family: 'Cinzel', serif;
  font-size: 1.3em;
  font-weight: 700;
  color: var(--text-gm);
  letter-spacing: 1px;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.header-right {
  display: flex;
  align-items: center;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.user-menu:hover {
  background: var(--bg-chat);
}

.user-menu:hover .avatar {
  box-shadow: 0 0 12px rgba(201, 162, 39, 0.5);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent-gold);
  transition: box-shadow 0.2s ease;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark);
  color: var(--accent-gold);
  font-family: 'Cinzel', serif;
  font-size: 12px;
  font-weight: 600;
}

.user-name {
  color: var(--text-primary);
  font-size: 14px;
}

.dropdown-arrow {
  color: var(--text-secondary);
  font-size: 10px;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: var(--bg-panel);
  border: 1px solid var(--border-frame);
  border-radius: 4px;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 14px;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: var(--bg-chat);
  color: var(--accent-red);
}

.dropdown-icon {
  font-size: 12px;
}

/* Tablet and mobile */
@media (max-width: 991.98px) {
  .app-header {
    height: 50px;
    padding: 0 12px;
  }

  .logo-icon {
    font-size: 20px;
  }

  .logo-text {
    font-size: 1.1em;
  }

  .user-name {
    display: none;
  }

  .dropdown-arrow {
    display: none;
  }

  .user-menu {
    padding: 4px 8px;
  }
}

/* Small phones */
@media (max-width: 575.98px) {
  .logo-text {
    display: none;
  }
}
</style>
