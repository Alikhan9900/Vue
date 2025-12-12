<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import AuthWrapper from "@/components/AuthWrapper.vue";
import BaseInput from "@/components/BaseInput.vue";

const email = ref("");
const password = ref("");
const errors = ref({});
const router = useRouter();
const auth = useAuthStore();

function validate() {
  const e = {};
  if (!email.value) e.email = "Email обовʼязковий";
  if (!password.value) e.password = "Пароль обовʼязковий";
  errors.value = e;
  return Object.keys(e).length === 0;
}

function submit() {
  if (!validate()) return;
  auth.login(email.value, password.value);
  router.push("/admin/dashboard");
}
</script>

<template>
  <AuthWrapper>
    <template #title>Login</template>

    <BaseInput label="Email" v-model="email" :error="errors.email" />
    <BaseInput
      label="Пароль"
      type="password"
      v-model="password"
      :error="errors.password"
    />

    <button style="width: 100%; margin-top: 8px" @click="submit">Увійти</button>

    <p style="margin-top: 10px; font-size: 14px">
      Немає акаунта?
      <RouterLink to="/register">Зареєструватися</RouterLink>
    </p>
  </AuthWrapper>
</template>
