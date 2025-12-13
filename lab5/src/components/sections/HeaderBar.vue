<script setup>
import Menubar from "primevue/menubar";

const items = [
  {
    label: "Hero",
    command: () =>
      document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Problem",
    command: () =>
      document
        .querySelector("#problem")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Benefits",
    command: () =>
      document
        .querySelector("#benefits")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "How it works",
    command: () =>
      document.querySelector("#how")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Pricing",
    command: () =>
      document
        .querySelector("#pricing")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Reviews",
    command: () =>
      document
        .querySelector("#reviews")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "FAQ",
    command: () =>
      document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Contact",
    command: () =>
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <div style="font-weight: 700; padding-left: 8px">
        TaskFlow
        <span class="pi pi-bolt" style="font-size: 14px; margin-left: 6px" />
      </div>
    </template>
  </Menubar>
</template>
