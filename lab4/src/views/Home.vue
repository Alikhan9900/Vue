<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section>
    <h1>{{ t("common.appTitle") | upper }}</h1>
    <p style="font-size: 14px">
      Demo застосунок для лабораторної роботи: Pinia, vue-i18n, VeeValidate.
    </p>
  </section>
</template>
