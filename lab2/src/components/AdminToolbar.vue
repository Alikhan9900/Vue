<script setup>
import { useRoute } from "vue-router";
import { inject } from "vue";

const route = useRoute();
const currentUser = inject("currentUser", null);
</script>

<template>
  <div class="toolbar-inner">
    <div>
      <strong>{{ route.meta.title || "Admin" }}</strong>
    </div>
    <div v-if="currentUser" style="font-size: 13px">
      Авторизовано як:
      <strong>{{ currentUser.name || currentUser.email }}</strong>
    </div>
  </div>
</template>

<style scoped>
.toolbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
