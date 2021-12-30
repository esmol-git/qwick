import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DisableAutocomplete from 'vue-disable-autocomplete';
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)


import AppLayout from "@/layouts/AppLayout";

import "./assets/scss/main.scss";

Vue.config.productionTip = false;
Vue.use(DisableAutocomplete);
Vue.component("AppLayout", AppLayout);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
