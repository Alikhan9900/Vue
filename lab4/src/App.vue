<script setup>
import { ref, watch, provide, onMounted } from "vue";
import { useSettingsStore } from "./stores/settings";
import { storeToRefs } from "pinia";

const settings = useSettingsStore();
const { locale } = storeToRefs(settings);

const themeMode = ref("light"); // 'light' | 'dark'

function applyTheme() {
  const key = `${locale.value}-${themeMode.value}`;
  document.documentElement.dataset.theme = key;
}

function toggleTheme() {
  themeMode.value = themeMode.value === "light" ? "dark" : "light";
}

// provide для доступу в компонентах
provide("toggleTheme", toggleTheme);
provide("themeMode", themeMode);

onMounted(() => {
  applyTheme();
});

watch([locale, themeMode], () => {
  applyTheme();
});
</script>

<template>
  <div class="app-root">
    <RouterView />
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
