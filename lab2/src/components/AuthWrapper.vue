<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <h2 class="auth-title">
        <slot name="title" />
      </h2>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}
.auth-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px 28px;
  width: 360px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.auth-title {
  text-align: center;
  margin-bottom: 16px;
}
</style>
