import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/default.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { title: "Home", layout: DefaultLayout },
    },
    {
      path: "/datasets",
      name: "datasets",
      component: () => import("../views/DatasetsView.vue"),
      meta: { title: "Datasets", layout: DefaultLayout },
    },
    {
      path: "/train",
      name: "train",
      component: () => import("../views/TrainView.vue"),
      meta: { title: "Training setup", layout: DefaultLayout },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Page not found",
      component: PageNotFound,
      meta: { title: "Not Found", layout: DefaultLayout },
    },
  ],
});

export default router;
