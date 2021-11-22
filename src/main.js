import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import AppLayout from "@/layouts/AppLayout";

import "./assets/scss/fonts.scss";
import "./assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.component("AppLayout", AppLayout);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
