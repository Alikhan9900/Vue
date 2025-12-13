<script setup>
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";
import { inject } from "vue";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

async function copyPromo() {
  const ok = await copyToClipboard("TASKFLOW10");
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
    <div class="badge"><i class="pi pi-check" /> SaaS для команд</div>

    <h1 class="section-title" style="font-size: 40px; margin-top: 12px">
      TaskFlow — задачі, дедлайни та прозорість в одному місці
    </h1>
    <p class="section-subtitle" style="max-width: 720px">
      Плануй спринти, контролюй прогрес та автоматизуй рутину. Ідеально для
      маленьких і середніх команд.
    </p>

    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px">
      <Button label="Спробувати демо" icon="pi pi-play" />
      <Button
        label="Скопіювати промокод TASKFLOW10"
        icon="pi pi-copy"
        severity="secondary"
        @click="copyPromo"
      />
    </div>

    <p class="mini-note" style="margin-top: 10px">
      Промокод дає знижку 10% на перший місяць.
    </p>
  </section>
</template>
