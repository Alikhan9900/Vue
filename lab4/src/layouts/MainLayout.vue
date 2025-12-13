<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
  <div class="layout">
    <HeaderBar />

    <main class="layout-main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <FooterBar />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-main {
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  padding: 24px 16px 32px;
}

/* анімації переходів сторінок */
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
</style>
