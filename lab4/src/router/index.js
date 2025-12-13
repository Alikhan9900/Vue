import { createRouter, createWebHistory } from "vue-router";

const MainLayout = () => import("@/layouts/MainLayout.vue");
const Home = () => import("@/views/Home.vue");
const Profile = () => import("@/views/Profile.vue");
const Products = () => import("@/views/Products.vue");
const Cart = () => import("@/views/Cart.vue");
const NotFound = () => import("@/views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active-link",
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "", component: Home },
        { path: "profile", component: Profile },
        { path: "products", component: Products },
        { path: "cart", component: Cart },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
