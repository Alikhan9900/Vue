<script setup>
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import ThemeToggle from "./ThemeToggle.vue";

const { t } = useI18n();
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <RouterLink to="/" class="logo">
        {{ t("common.appTitle") | capitalize }}
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/profile">{{ t("common.nav.profile") }}</RouterLink>
        <RouterLink to="/products">{{ t("common.nav.products") }}</RouterLink>
        <RouterLink to="/cart">{{ t("common.nav.cart") }}</RouterLink>
      </nav>

      <div class="header-controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--border-subtle);
  background: var(--card-bg);
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  font-weight: 700;
  letter-spacing: 0.03em;
}

.nav {
  display: flex;
  gap: 12px;
  font-size: 14px;
}

.nav a {
  padding: 4px 8px;
  border-radius: 999px;
}

.nav a.active-link {
  background: var(--accent-soft);
  color: var(--accent);
}

.header-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
