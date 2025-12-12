<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goLogin() {
  router.push("/login");
}
function goRegister() {
  router.push("/register");
}
</script>

<template>
  <div style="padding: 40px; text-align: center">
    <h1>ЛР2 – Vue Router + компоненти</h1>
    <p>Міні-адмінка з імітацією авторизації.</p>
    <button @click="goLogin">Login</button>
    <button @click="goRegister" style="margin-left: 10px">Register</button>
  </div>
</template>
