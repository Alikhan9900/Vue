import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { i18n, setI18nLocale } from "./i18n";
import { setupValidation } from "./validation";
import { useSettingsStore } from "./stores/settings";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);

// Синхронізація i18n з settings.locale (персистентним)
const settings = useSettingsStore(pinia);
setI18nLocale(settings.locale);

app.use(i18n);
setupValidation();

app.use(router);
app.mount("#app");
