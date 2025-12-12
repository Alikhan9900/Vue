import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const isAuthenticated = computed(() => user.value !== null);

  function login(email, password) {
    user.value = {
      id: 1,
      name: "Admin User",
      email,
    };
  }

  function register({ name, email, password }) {
    user.value = {
      id: Date.now(),
      name,
      email,
    };
  }

  function logout() {
    user.value = null;
  }

  return { user, isAuthenticated, login, register, logout };
});
