<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import AuthWrapper from "@/components/AuthWrapper.vue";
import BaseInput from "@/components/BaseInput.vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errors = ref({});
const router = useRouter();
const auth = useAuthStore();

function validate() {
  const e = {};
  if (!name.value) e.name = "Ім'я обовʼязкове";
  if (!email.value) e.email = "Email обовʼязковий";
  if (!password.value) e.password = "Пароль обовʼязковий";
  if (password.value && password.value.length < 4)
    e.password = "Мінімум 4 символи";
  if (confirmPassword.value !== password.value)
    e.confirmPassword = "Паролі не співпадають";
  errors.value = e;
  return Object.keys(e).length === 0;
}

function submit() {
  if (!validate()) return;
  auth.register({
    name: name.value,
    email: email.value,
    password: password.value,
  });
  router.push("/admin/dashboard");
}
</script>

<template>
  <AuthWrapper>
    <template #title>Register</template>

    <BaseInput label="Імʼя" v-model="name" :error="errors.name" />
    <BaseInput label="Email" v-model="email" :error="errors.email" />
    <BaseInput
      label="Пароль"
      type="password"
      v-model="password"
      :error="errors.password"
    />
    <BaseInput
      label="Підтвердження пароля"
      type="password"
      v-model="confirmPassword"
      :error="errors.confirmPassword"
    />

    <button style="width: 100%; margin-top: 8px" @click="submit">
      Зареєструватися
    </button>

    <p style="margin-top: 10px; font-size: 14px">
      Вже є акаунт?
      <RouterLink to="/login">Увійти</RouterLink>
    </p>
  </AuthWrapper>
</template>
