import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    locale: "ua", // 'ua' | 'en'
  }),
  actions: {
    setLocale(lang) {
      if (lang === "ua" || lang === "en") {
        this.locale = lang;
      }
    },
  },
  // pinia-plugin-persistedstate: селективна персистентність + custom key
  persist: {
    key: "lab4_settings",
    paths: ["locale"], // зберігаємо тільки locale
  },
});
