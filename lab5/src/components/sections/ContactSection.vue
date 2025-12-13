<script setup>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import { reactive } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
});

const errors = reactive({
  name: false,
  email: false,
  message: false,
  agree: false,
});

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validate() {
  errors.name = !form.name.trim();
  errors.email = !form.email.trim() || !isEmail(form.email);
  errors.message = !form.message.trim();
  errors.agree = !form.agree;
  return !(errors.name || errors.email || errors.message || errors.agree);
}

function reset() {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.message = "";
  form.agree = false;
}

function submit() {
  if (!validate()) return;

  reset();
  toast.add({
    severity: "success",
    summary: "Успіх",
    detail: "Заявку надіслано",
    life: 2200,
  });
}
</script>

<template>
  <section class="section" :id="$attrs.id">
    <h2 class="section-title">Напишіть нам</h2>
    <p class="section-subtitle">Отримайте демо або консультацію.</p>

    <Card>
      <template #content>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
          <span class="p-float-label">
            <InputText id="name" v-model="form.name" :invalid="errors.name" />
            <label for="name">Імʼя*</label>
          </span>

          <span class="p-float-label">
            <InputText
              id="email"
              v-model="form.email"
              :invalid="errors.email"
            />
            <label for="email">Email*</label>
          </span>

          <span class="p-float-label" style="grid-column: 1 / -1">
            <InputMask
              id="phone"
              v-model="form.phone"
              mask="+38 (099) 999-99-99"
              placeholder="+38 (0__) ___-__-__"
            />
            <label for="phone">Телефон</label>
          </span>

          <span class="p-float-label" style="grid-column: 1 / -1">
            <Textarea
              id="msg"
              v-model="form.message"
              rows="4"
              :invalid="errors.message"
            />
            <label for="msg">Повідомлення*</label>
          </span>

          <div
            style="
              grid-column: 1 / -1;
              display: flex;
              align-items: center;
              gap: 10px;
            "
          >
            <Checkbox
              v-model="form.agree"
              :binary="true"
              inputId="agree"
              :invalid="errors.agree"
            />
            <label for="agree">Погоджуюсь з політикою конфіденційності*</label>
          </div>

          <div style="grid-column: 1 / -1; display: flex; gap: 10px">
            <Button label="Надіслати" icon="pi pi-send" @click="submit" />
            <Button
              label="Скинути"
              icon="pi pi-refresh"
              severity="secondary"
              @click="reset"
            />
          </div>

          <p class="mini-note" style="grid-column: 1 / -1; margin: 0">
            * — обовʼязкові поля. Якщо є помилки — поля стають
            <strong>invalid</strong>.
          </p>
        </div>
      </template>
    </Card>
  </section>
</template>
