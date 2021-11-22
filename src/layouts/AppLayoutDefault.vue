<template>
  <v-app>
    <navbar
      @drawer="menuSwitcher"
      :drawer="drawer"
      :icon="
        drawer ? 'mdi-format-indent-increase' : 'mdi-format-indent-decrease'
      "
    />
    <sidebar @drawer="menuSwitcher" :drawer="drawer" />
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: { Navbar, Sidebar },
  data: () => ({ drawer: true }),
  methods: {
    menuSwitcher(drawer) {
      this.drawer = drawer;
    },
  },
};
</script>
