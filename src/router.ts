import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home/Home"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login/Login"),
  },
  {
    path: "/tag-search/:tagName",
    name: "tag-search",
    component: () => import("./views/TagSearch/TagSearch"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "simkung-active-link",
});
