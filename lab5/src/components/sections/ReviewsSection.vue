<script setup>
import Card from "primevue/card";

const reviews = [
  { name: "Андрій", text: "Нарешті дедлайни не губляться. Дуже зручно!" },
  {
    name: "Оля",
    text: "Канбан + звіти — топ. Команда стала працювати швидше.",
  },
  { name: "Іван", text: "Інтеграції економлять купу часу." },
];
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">Відгуки</h2>
    <p class="section-subtitle">Короткі відгуки користувачів.</p>

    <div
      style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px"
    >
      <Card v-for="r in reviews" :key="r.name">
        <template #title>{{ r.name }}</template>
        <template #content>{{ r.text }}</template>
      </Card>
    </div>
  </section>
</template>
