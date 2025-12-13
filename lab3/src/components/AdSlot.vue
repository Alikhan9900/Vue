<script setup>
const props = defineProps({
  title: { type: String, default: "Реклама" },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <aside class="ad-slot" @click="emit('click')">
    <div class="ad-label">Ad</div>
    <h4 class="ad-title">{{ title }}</h4>
    <div class="ad-content">
      <slot> Клікніть, щоб переглянути деталі пропозиції. </slot>
    </div>
  </aside>
</template>

<style scoped>
.ad-slot {
  border-radius: 10px;
  padding: 12px 14px;
  border: 1px dashed var(--accent);
  background: var(--accent-soft);
  cursor: pointer;
  margin: 12px 0;
}
.ad-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
}
.ad-title {
  margin: 4px 0 6px;
  font-size: 14px;
}
.ad-content {
  font-size: 13px;
}
</style>
