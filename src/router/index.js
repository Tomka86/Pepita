import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/collections",
      name: "collections",
      component: () => import("../views/Collections.vue"),
    },
    {
      path: "/tickets",
      name: "tickets",
      component: () => import("../views/Tickets.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/Menu.vue"),
    },
  ],
});

export default router;
