import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/collections",
      name: "collections",
      component: () => import("../views/Collections.vue"),
    },
    {
      path: "/collections2",
      name: "collections2",
      component: () => import("../views/Collections2.vue"),
    },
    {
      path: "/tickets",
      name: "tickets",
      component: () => import("../views/Tickets.vue"),
    },
  ],
});

export default router;
