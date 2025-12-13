<script setup>
import Card from "primevue/card";

const benefits = [
  {
    title: "Швидке планування",
    text: "Шаблони спринтів та автопріоритезація.",
  },
  {
    title: "Прозорість",
    text: "Хто відповідальний і що зроблено видно одразу.",
  },
  { title: "Інтеграції", text: "Slack/Email/Webhooks для командних процесів." },
  { title: "Аналітика", text: "Метрики продуктивності та звіти за період." },
];
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">Переваги</h2>
    <p class="section-subtitle">Фокус на простоті та користі.</p>

    <div
      style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px"
    >
      <Card v-for="b in benefits" :key="b.title">
        <template #title>{{ b.title }}</template>
        <template #content>{{ b.text }}</template>
      </Card>
    </div>
  </section>
</template>
