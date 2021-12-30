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
    component: () => import("../views/Family"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/family/user/:userId",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
        requiresAuth: true,
    },
},
  {
    path: "/regulatioms",
    name: "Регламенты",
    component: () => import("../views/Regulations"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/duties",
    name: "Мои обязанности",
    component: () => import("../views/Duties"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/reports",
    name: "Отчеты",
    component: () => import("../views/Reports"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/communications",
    name: "Коммуникации",
    component: () => import("../views/Сommunications"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/staff",
    name: "Сотрудники",
    component: () => import("../views/Staff"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/payment",
    name: "Оплата",
    component: () => import("../views/Payment"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login"),
    meta: {
      layout: "AppLayoutAuth",
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/auth/Registration"),
    meta: {
      layout: "AppLayoutAuth",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
