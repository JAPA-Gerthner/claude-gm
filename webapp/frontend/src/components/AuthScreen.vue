<script setup lang="ts">
defineEmits<{
  login: []
}>()
</script>

<template>
  <div class="screen">
    <div class="auth-container">
      <h1>Quest Keeper</h1>
      <p>AI-powered RPG Game Master</p>
      <button class="login-btn" @click="$emit('login')">Login with Casdoor</button>
    </div>
  </div>
</template>
