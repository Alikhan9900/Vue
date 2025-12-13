import { createRouter, createWebHistory } from "vue-router";

const MainLayout = () => import("@/layouts/MainLayout.vue");
const Home = () => import("@/views/Home.vue");
const Article = () => import("@/views/Article.vue");
const About = () => import("@/views/About.vue");
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
        { path: "article/:id", component: Article },
        { path: "about", component: About },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
