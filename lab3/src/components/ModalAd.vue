<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: "Реклама" },
});

const emit = defineEmits(["update:modelValue"]);

function close() {
  emit("update:modelValue", false);
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="backdrop" @click.self="close">
        <div class="modal">
          <header class="modal-header">
            <h3>{{ title }}</h3>
            <button class="close-btn" type="button" @click="close">✕</button>
          </header>
          <div class="modal-body">
            <slot>
              <p>
                Тут могла б бути ваша реклама: спеціальні пропозиції, знижки чи
                промокод.
              </p>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal {
  width: min(420px, 90vw);
  background: var(--card-bg);
  color: var(--text);
  border-radius: 14px;
  padding: 16px 18px 18px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

/* анімація модалки */
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
</style>
