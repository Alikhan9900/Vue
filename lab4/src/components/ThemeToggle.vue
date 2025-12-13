<script setup>
import { inject, computed } from "vue";

const themeMode = inject("themeMode");
const toggleTheme = inject("toggleTheme");

const isDark = computed(() => themeMode?.value === "dark");

function onToggle() {
  toggleTheme && toggleTheme();
}
</script>

<template>
  <button class="theme-toggle" type="button" @click="onToggle">
    <span v-if="!isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  border: 1px solid var(--border-subtle);
  background: var(--card-bg);
  border-radius: 999px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
}
</style>
