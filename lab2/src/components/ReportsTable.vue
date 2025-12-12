<script setup>
const props = defineProps({
  items: { type: Array, default: () => [] },
});
</script>

<template>
  <table border="1" cellspacing="0" cellpadding="4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Тип</th>
        <th>Дата</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.items" :key="item.id">
        <slot name="row" :item="item">
          <td>{{ item.id }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.date }}</td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>
