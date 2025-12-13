<script setup>
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";
import { inject } from "vue";

const toast = useToast();
const copyToClipboard = inject("copyToClipboard");

async function copySupport() {
  const ok = await copyToClipboard("support@taskflow.io");
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
  <footer
    style="background: white; border-top: 1px solid #e5e7eb; padding: 18px 16px"
  >
    <div
      style="
        max-width: var(--page-max);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      "
    >
      <div>
        <div style="font-weight: 700">TaskFlow</div>
        <div class="mini-note">support@taskflow.io</div>
      </div>

      <div
        style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap"
      >
        <Button
          label="Скопіювати email підтримки"
          icon="pi pi-copy"
          severity="secondary"
          @click="copySupport"
        />
        <span class="mini-note">© 2025</span>
      </div>
    </div>
  </footer>
</template>
