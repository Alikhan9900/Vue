<script setup>
import Panel from "primevue/panel";
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">Як це працює</h2>
    <p class="section-subtitle">3 кроки до порядку у задачах.</p>

    <Panel header="Крок 1 — Створи проєкт">
      Додай команду, ролі, дедлайни та правила.
    </Panel>

    <div style="height: 10px" />

    <Panel header="Крок 2 — Додай задачі">
      Канбан-дошка, теги, пріоритети, чеклісти.
    </Panel>

    <div style="height: 10px" />

    <Panel header="Крок 3 — Контролюй прогрес">
      Автоматичні звіти + нагадування.
    </Panel>
  </section>
</template>
