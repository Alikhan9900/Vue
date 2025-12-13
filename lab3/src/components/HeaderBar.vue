<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <RouterLink to="/" class="logo"> VueNews<span>.lab</span> </RouterLink>

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <ThemeToggle />
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
.logo span {
  color: var(--accent);
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
</style>
