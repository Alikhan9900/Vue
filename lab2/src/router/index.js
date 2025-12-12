import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

// lazy-loaded компоненти
const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/Login.vue");
const Register = () => import("@/views/Register.vue");
const AdminLayout = () => import("@/layouts/AdminLayout.vue");
const Dashboard = () => import("@/views/admin/Dashboard.vue");
const Users = () => import("@/views/admin/Users.vue");
const UserDetails = () => import("@/views/admin/UserDetails.vue");
const Reports = () => import("@/views/admin/Reports.vue");
const NotFound = () => import("@/views/NotFound.vue");
const AdminToolbar = () => import("@/components/AdminToolbar.vue");

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  linkActiveClass: "active-link",

  routes: [
    {
      path: "/",
      component: Home,
      meta: { public: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { public: true },
    },
    {
      path: "/register",
      component: Register,
      meta: { public: true },
    },
    {
      path: "/admin",
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        { path: "", redirect: "/admin/dashboard" },
        {
          path: "dashboard",
          components: {
            default: Dashboard,
            toolbar: AdminToolbar,
          },
          meta: { title: "Dashboard" },
        },
        {
          path: "users",
          components: {
            default: Users,
            toolbar: AdminToolbar,
          },
          meta: { title: "Users" },
        },
        {
          path: "user/:id",
          components: {
            default: UserDetails,
            toolbar: AdminToolbar,
          },
          meta: { title: "User details" },
        },
        {
          path: "reports",
          components: {
            default: Reports,
            toolbar: AdminToolbar,
          },
          meta: { title: "Reports" },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: { public: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.public) return next();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next("/login");
  }

  next();
});

export default router;
