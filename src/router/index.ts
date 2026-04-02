import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { title: "Home", layout: DefaultLayout },
    },
  ],
});

export default router;
