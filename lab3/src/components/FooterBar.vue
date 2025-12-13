<template>
  <footer class="footer">
    <div class="footer-inner">
      <span>© 2025 VueNews.lab</span>
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
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
