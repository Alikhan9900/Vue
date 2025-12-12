<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = computed(() => Number(route.params.id));

const user = computed(() => {
  const all = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "user" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "user" },
  ];
  return all.find((u) => u.id === userId.value);
});
</script>

<template>
  <div>
    <h1>User details</h1>
    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Імʼя:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Роль:</strong> {{ user.role }}</p>
    </div>
    <p v-else>Користувача не знайдено</p>
  </div>
</template>
