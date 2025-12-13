<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import { computed, ref, inject } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

const plans = [
  {
    name: "Basic",
    for: "Фріланс / 1 людина",
    price: 199,
    features: ["До 3 проєктів", "Канбан", "Нагадування", "Базові звіти"],
  },
  {
    name: "Team",
    for: "Малі команди",
    price: 399,
    features: ["До 20 користувачів", "Ролі", "Інтеграції", "Розширені звіти"],
  },
  {
    name: "Pro",
    for: "Бізнес",
    price: 699,
    features: ["Необмежено", "SLA", "API", "Аудит-лог"],
  },
];

const basePrice = ref(plans[1].price);
const users = ref(5);

const total = computed(() => (users.value || 0) * (basePrice.value || 0));

async function choosePlan(plan) {
  basePrice.value = plan.price;
  toast.add({
    severity: "success",
    summary: "План обрано",
    detail: `Обрано: ${plan.name}`,
    life: 2000,
  });
}

async function copyDemoLink() {
  const ok = await copyToClipboard("https://taskflow.io/demo");
  if (ok)
    toast.add({
      severity: "success",
      summary: "OK",
      detail: "Скопійовано в буфер обміну",
      life: 2000,
    });
}
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">Тарифи / Плани</h2>
    <p class="section-subtitle">3 плани + простий калькулятор.</p>

    <div
      style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px"
    >
      <Card v-for="p in plans" :key="p.name">
        <template #title>{{ p.name }}</template>
        <template #subtitle>{{ p.for }}</template>
        <template #content>
          <div style="font-size: 26px; font-weight: 700; margin: 10px 0">
            {{ p.price }} грн/міс
          </div>
          <ul style="margin: 0; padding-left: 18px">
            <li v-for="f in p.features" :key="f">{{ f }}</li>
          </ul>

          <div
            style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap"
          >
            <Button
              label="Обрати план"
              icon="pi pi-check"
              @click="choosePlan(p)"
            />
            <Button
              label="Скопіювати лінк демо"
              icon="pi pi-copy"
              severity="secondary"
              @click="copyDemoLink"
            />
          </div>
        </template>
      </Card>
    </div>

    <div style="margin-top: 18px">
      <h3 style="margin: 0 0 10px">Міні-калькулятор</h3>
      <div
        style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap"
      >
        <span>Кількість користувачів:</span>
        <InputNumber v-model="users" :min="1" :max="999" />
        <span class="mini-note"
          >Орієнтовна вартість: <strong>{{ total }}</strong> грн/міс.</span
        >
      </div>
    </div>
  </section>
</template>
