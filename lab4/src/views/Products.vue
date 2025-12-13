<script setup>
import { useI18n } from "vue-i18n";
import { products } from "@/data/products";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const { t } = useI18n();
const cart = useCartStore();
const { totalCount } = storeToRefs(cart);

function addToCart(product) {
  cart.add(product);
}
</script>

<template>
  <section>
    <h1>{{ t("products.title") }}</h1>
    <p style="font-size: 14px; margin-bottom: 10px">
      {{ t("products.priceFrom") }}: {{ products[0].price }} ₴
    </p>

    <ul
      style="
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      "
    >
      <li
        v-for="product in products"
        :key="product.id"
        style="
          border-radius: 10px;
          padding: 10px 12px;
          background: var(--card-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div>
          <div style="font-weight: 600">{{ product.title }}</div>
          <div style="font-size: 13px; opacity: 0.8">{{ product.price }} ₴</div>
        </div>
        <button type="button" @click="addToCart(product)">
          {{ t("common.actions.addToCart") }}
        </button>
      </li>
    </ul>

    <p style="font-size: 13px; margin-top: 10px">
      {{ t("cart.items") }}: {{ totalCount }}
    </p>
  </section>
</template>
