import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/reports",
    name: "Reports",

    component: () => import("../views/Reports.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
