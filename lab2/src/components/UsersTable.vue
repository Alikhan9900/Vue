<script setup>
const props = defineProps({
  users: { type: Array, default: () => [] },
});

const emit = defineEmits(["select"]);

function selectUser(user) {
  emit("select", user);
}
</script>

<template>
  <table border="1" cellspacing="0" cellpadding="4">
    <thead>
      <tr>
        <th>Id</th>
        <th>Імʼя</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in props.users"
        :key="user.id"
        style="cursor: pointer"
        @click="selectUser(user)"
      >
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>
