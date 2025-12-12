<script>
export default {
  name: "OverviewTab",
};
</script>

<script setup>
import { inject } from "vue";

const currentUser = inject("currentUser", null);
</script>

<template>
  <div>
    <h2>Overview</h2>
    <p>Тут можна показати загальні показники.</p>
    <p v-if="currentUser">
      Вітаю, <strong>{{ currentUser.name || currentUser.email }}</strong
      >!
    </p>
  </div>
</template>
