<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <span>© 2025 {{ t("common.appTitle") }}</span>
      <nav class="footer-nav">
        <RouterLink to="/profile">{{ t("common.nav.profile") }}</RouterLink>
        <RouterLink to="/products">{{ t("common.nav.products") }}</RouterLink>
        <RouterLink to="/cart">{{ t("common.nav.cart") }}</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-subtle);
  background: var(--card-bg);
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
}

.footer-nav {
  display: flex;
  gap: 10px;
}
</style>
