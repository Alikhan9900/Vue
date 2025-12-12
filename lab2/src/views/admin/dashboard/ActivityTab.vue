<script>
export default {
  name: "ActivityTab",
};
</script>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <div>
    <h2>Activity</h2>
    <p>Сторінка для демонстрації кешування/некешування.</p>
    <p>
      Лічильник: {{ counter }}
      <button @click="counter++" style="margin-left: 8px">+</button>
    </p>
  </div>
</template>
