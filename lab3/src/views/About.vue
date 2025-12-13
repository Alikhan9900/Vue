<script setup>
import { ref } from "vue";
import AdSlot from "@/components/AdSlot.vue";
import ModalAd from "@/components/ModalAd.vue";

const showAboutAdModal = ref(false);
</script>

<template>
  <section>
    <h1>Про нас</h1>
    <p style="font-size: 14px; margin-bottom: 10px">
      VueNews.lab — навчальний міні-сайт новин, створений для демонстрації
      стилізації компонентів у Vue 3.
    </p>

    <p style="font-size: 14px">
      Мета проєкту — показати роботу з Vue SFC стилями, CSS Modules, темами, а
      також анімаціями переходів і модальними вікнами через &lt;Teleport&gt;.
    </p>

    <AdSlot title="Партнерська реклама" @click="showAboutAdModal = true">
      Тут можна розміщувати рекламу партнерів або освітніх курсів.
    </AdSlot>

    <ModalAd v-model="showAboutAdModal" title="Партнерська реклама">
      <p>
        Приклад партнерського банеру: освітні курси з фронтенд-розробки,
        тренінги з Vue, React та TypeScript.
      </p>
    </ModalAd>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 6px;
}
</style>
