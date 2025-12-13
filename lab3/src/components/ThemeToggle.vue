<script setup>
import { inject, computed } from "vue";

const theme = inject("theme");
const toggleTheme = inject("toggleTheme");

const isDark = computed(() => theme?.value === "dark");

function onToggle() {
  toggleTheme && toggleTheme();
}
</script>

<template>
  <button class="theme-toggle" type="button" @click="onToggle">
    <span v-if="!isDark">🌙 Dark</span>
    <span v-else>☀️ Light</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  border: 1px solid var(--border-subtle);
  background: var(--card-bg);
  border-radius: 999px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 13px;
}
</style>
