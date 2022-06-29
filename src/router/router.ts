import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "simkung-active-link",
});
