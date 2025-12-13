import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], // { id, title, price, qty }
  }),
  getters: {
    totalCount: (state) => state.items.reduce((sum, i) => sum + i.qty, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, i) => sum + i.qty * i.price, 0),
  },
  actions: {
    add(product) {
      const existing = this.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1,
        });
      }
    },
    remove(id) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    clear() {
      this.items = [];
    },
  },
});
