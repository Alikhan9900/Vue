<script setup>
import { defineModel } from "vue";

const model = defineModel();

defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  error: { type: String, default: "" },
});
</script>

<template>
  <label class="base-input">
    <span class="base-input__label">{{ label }}</span>
    <input class="base-input__field" :type="type" v-model="model" />
    <small v-if="error" class="base-input__error">{{ error }}</small>
  </label>
</template>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}
.base-input__field {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.base-input__field:focus {
  outline: none;
  border-color: #42b883;
}
.base-input__error {
  color: #e03131;
  font-size: 12px;
}
</style>
