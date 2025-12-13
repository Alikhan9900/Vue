<script setup>
import { ref, onMounted, watch, provide } from "vue";

const theme = ref("light");

function applyTheme(value) {
  document.documentElement.dataset.theme = value;
  localStorage.setItem("lab3_theme", value);
}

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

onMounted(() => {
  const saved = localStorage.getItem("lab3_theme");
  if (saved === "dark" || saved === "light") {
    theme.value = saved;
  }
  applyTheme(theme.value);
});

watch(theme, (value) => {
  applyTheme(value);
});

provide("theme", theme);
provide("toggleTheme", toggleTheme);
</script>

<template>
  <div class="app-root">
    <router-view />
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  transition:
    background 0.25s ease,
    color 0.25s ease;
}
</style>
