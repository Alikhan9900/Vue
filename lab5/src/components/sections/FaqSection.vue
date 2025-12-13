<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">FAQ</h2>
    <p class="section-subtitle">Поширені запитання.</p>

    <Accordion>
      <AccordionTab header="Чи є безкоштовний тест?">
        Так, демо доступне безкоштовно.
      </AccordionTab>
      <AccordionTab header="Чи можна додати команду?">
        Так, у плані Team/Pro доступні ролі та доступи.
      </AccordionTab>
      <AccordionTab header="Чи є інтеграції?">
        Так, інтеграції доступні у Team/Pro.
      </AccordionTab>
    </Accordion>
  </section>
</template>
