<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useForm, useField, useFieldArray } from "vee-validate";
import * as yup from "yup";

const { t } = useI18n();

const profileSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  dateOfBirth: yup.date().required(),
  address: yup.string().required().min(5),
  phones: yup.array().of(yup.string().required()).min(1),
});

const { handleSubmit, resetForm, setFieldError, errors, values } = useForm({
  validationSchema: profileSchema,
  initialValues: {
    name: "",
    email: "",
    dateOfBirth: "",
    address: "",
    phones: [""],
  },
});

const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: dateOfBirth } = useField("dateOfBirth");
const { value: address } = useField("address");

const {
  fields: phones,
  push: addPhone,
  remove: removePhone,
} = useFieldArray("phones");

const serverMessage = ref("");

const onSubmit = handleSubmit((formValues) => {
  serverMessage.value = t("profile.formSaved");

  // Емуляція помилки від сервера
  if (formValues.email === "test@example.com") {
    setFieldError("email", t("profile.serverError"));
  }
});

function onReset() {
  resetForm();
  serverMessage.value = "";
}

function addPhoneField() {
  addPhone("");
}
</script>

<template>
  <section>
    <h1>{{ t("profile.title") }}</h1>

    <form @submit.prevent="onSubmit" class="profile-form">
      <div class="form-grid">
        <label class="field">
          <span>{{ t("profile.name") }}</span>
          <input v-model="name" type="text" />
          <small v-if="errors.name" class="error">{{ errors.name }}</small>
        </label>

        <label class="field">
          <span>{{ t("profile.email") }}</span>
          <input v-model="email" type="email" />
          <small v-if="errors.email" class="error">{{ errors.email }}</small>
        </label>

        <label class="field">
          <span>{{ t("profile.dateOfBirth") }}</span>
          <input v-model="dateOfBirth" type="date" />
          <small v-if="errors.dateOfBirth" class="error">
            {{ errors.dateOfBirth }}
          </small>
        </label>

        <label class="field field--full">
          <span>{{ t("profile.address") }}</span>
          <textarea v-model="address" rows="2"></textarea>
          <small v-if="errors.address" class="error">{{
            errors.address
          }}</small>
        </label>

        <div class="field field--full">
          <span>{{ t("profile.phones") }}</span>

          <div class="phones">
            <div
              v-for="(phone, idx) in phones"
              :key="phone.key"
              class="phone-row"
            >
              <input v-model="phone.value" type="tel" />
              <button
                type="button"
                class="remove-btn"
                @click="removePhone(idx)"
                v-if="phones.length > 1"
              >
                ×
              </button>
            </div>
          </div>

          <button type="button" class="small-btn" @click="addPhoneField">
            {{ t("common.actions.addPhone") }}
          </button>

          <small v-if="errors.phones" class="error">
            {{ errors.phones }}
          </small>
        </div>
      </div>

      <div class="buttons">
        <button type="submit">
          {{ t("common.actions.save") }}
        </button>
        <button type="button" @click="onReset">
          {{ t("common.actions.reset") }}
        </button>
      </div>

      <p v-if="serverMessage" class="server-message">
        {{ serverMessage }}
      </p>
    </form>

    <details style="margin-top: 16px; font-size: 13px">
      <summary>Debug values</summary>
      <pre>{{ values }}</pre>
    </details>
  </section>
</template>

<style scoped>
.profile-form {
  margin-top: 12px;
  background: var(--card-bg);
  border-radius: 12px;
  padding: 16px 18px;
  border: 1px solid var(--border-subtle);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.field--full {
  grid-column: 1 / -1;
}

input,
textarea {
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  padding: 6px 8px;
  font-size: 14px;
  background: var(--bg);
  color: var(--text);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.error {
  color: #ef4444;
  font-size: 12px;
}

.phones {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;
}

.phone-row {
  display: flex;
  gap: 6px;
}

.remove-btn {
  border-radius: 8px;
  border: none;
  padding: 0 8px;
  cursor: pointer;
}

.small-btn {
  border-radius: 999px;
  border: none;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
}

.buttons {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}

.server-message {
  margin-top: 10px;
  font-size: 13px;
  color: #16a34a;
}
</style>
