import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Главная",
    component: Home,
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/family",
    name: "ОФС",
    component: () => import("../views/Family.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/regulatioms",
    name: "Регламенты",
    component: () => import("../views/Regulations.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/duties",
    name: "Мои обязанности",
    component: () => import("../views/Duties.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/reports",
    name: "Отчеты",
    component: () => import("../views/Reports.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/communications",
    name: "Коммуникации",
    component: () => import("../views/Сommunications.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/staff",
    name: "Сотрудники",
    component: () => import("../views/Staff.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/payment",
    name: "Оплата",
    component: () => import("../views/Payment.vue"),
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
