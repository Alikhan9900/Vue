<script setup>
import { useI18n } from "vue-i18n";
import { useSettingsStore } from "@/stores/settings";
import { storeToRefs } from "pinia";

const { locale } = useI18n();
const settings = useSettingsStore();
const { locale: storeLocale } = storeToRefs(settings);

function change(lang) {
  settings.setLocale(lang);
  locale.value = lang;
}
</script>

<template>
  <div class="lang-switcher">
    <button
      type="button"
      class="lang-btn"
      :class="{ active: storeLocale === 'ua' }"
      @click="change('ua')"
    >
      UA
    </button>
    <button
      type="button"
      class="lang-btn"
      :class="{ active: storeLocale === 'en' }"
      @click="change('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: inline-flex;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  overflow: hidden;
}

.lang-btn {
  font-size: 12px;
  padding: 3px 8px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.lang-btn.active {
  background: var(--accent-soft);
  color: var(--accent);
}
</style>
