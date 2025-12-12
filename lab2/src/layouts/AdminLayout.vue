<script setup>
import { useAuthStore } from "@/stores/auth";
import { provide } from "vue";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

provide("currentUser", auth.user);

function logout() {
  auth.logout();
  router.push("/login");
}
</script>

<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="sidebar__user" v-if="auth.user">
        <div>
          <strong>{{ auth.user.name || "User" }}</strong>
        </div>
        <div style="font-size: 12px">{{ auth.user.email }}</div>
      </div>

      <nav class="sidebar__nav">
        <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
        <RouterLink to="/admin/users">Users</RouterLink>
        <RouterLink to="/admin/reports">Reports</RouterLink>
      </nav>

      <button class="sidebar__logout" @click="logout">Вийти</button>
    </aside>

    <div class="admin-layout__main">
      <header class="toolbar">
        <RouterView name="toolbar" />
      </header>

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 220px;
  background: #1f2933;
  color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sidebar__nav a {
  color: #cbd2d9;
}
.sidebar__nav a.active-link {
  color: #ffffff;
}
.sidebar__logout {
  margin-top: auto;
  background: #e03131;
  border: none;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}
.admin-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.toolbar {
  padding: 10px 16px;
  background: #f1f3f5;
  border-bottom: 1px solid #dee2e6;
}
.content {
  padding: 16px;
}
.sidebar__user {
  font-size: 14px;
}
</style>
