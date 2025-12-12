<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import UsersTable from "@/components/UsersTable.vue";

const router = useRouter();

const users = ref([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
]);

function handleSelect(user) {
  router.push(`/admin/user/${user.id}`);
}
</script>

<template>
  <div>
    <h1>Users</h1>
    <UsersTable :users="users" @select="handleSelect" />
    <p style="font-size: 12px; margin-top: 8px">
      (props/emits: UsersTable → Users)
    </p>
  </div>
</template>
