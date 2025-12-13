import { createI18n } from "vue-i18n";
import ua from "./locales/ua";
import en from "./locales/en";

export const i18n = createI18n({
  legacy: false,
  locale: "ua",
  fallbackLocale: "en",
  messages: {
    ua,
    en,
  },
  modifiers: {
    upper: (str) => (str ? String(str).toUpperCase() : ""),
    lower: (str) => (str ? String(str).toLowerCase() : ""),
    capitalize: (str) => {
      if (!str) return "";
      const s = String(str);
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    // кастомний модифікатор
    exclaim: (str) => (str ? `${str}!` : ""),
  },
});

export function setI18nLocale(lang) {
  i18n.global.locale.value = lang;
}
