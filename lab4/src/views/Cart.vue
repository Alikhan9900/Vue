<script setup>
import { useI18n } from "vue-i18n";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const { t } = useI18n();
const cart = useCartStore();
const { items, totalCount, totalPrice } = storeToRefs(cart);

function removeItem(id) {
  cart.remove(id);
}
function clearCart() {
  cart.clear();
}
</script>

<template>
  <section>
    <h1>{{ t("cart.title") }}</h1>

    <div v-if="items.length === 0" style="margin-top: 8px">
      {{ t("cart.empty") }}
    </div>

    <div v-else>
      <table
        style="
          width: 100%;
          border-collapse: collapse;
          margin-top: 8px;
          font-size: 14px;
        "
      >
        <thead>
          <tr>
            <th align="left">{{ t("cart.items") }}</th>
            <th align="right">{{ t("cart.qty") }}</th>
            <th align="right">{{ t("cart.price") }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
            style="border-top: 1px solid var(--border-subtle)"
          >
            <td>{{ item.title }}</td>
            <td align="right">{{ item.qty }}</td>
            <td align="right">{{ item.price * item.qty }} ₴</td>
            <td align="right">
              <button type="button" @click="removeItem(item.id)">
                {{ t("common.actions.remove") }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top: 10px; font-size: 14px">
        <div>
          {{ t("cart.total") }}: <strong>{{ totalPrice }} ₴</strong>
        </div>
        <div>
          {{ t("cart.items") }}: <strong>{{ totalCount }}</strong>
        </div>
      </div>

      <div style="margin-top: 10px; display: flex; gap: 8px">
        <button type="button">
          {{ t("common.actions.checkout") | exclaim }}
        </button>
        <button type="button" @click="clearCart">
          {{ t("common.actions.clearCart") }}
        </button>
      </div>
    </div>
  </section>
</template>
