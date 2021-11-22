<template>
  <v-app>
    <navbar @drawer="menuSwitcher" :drawer="drawer" />
    <sidebar @drawer="menuSwitcher" :drawer="drawer" />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app> </v-footer> -->
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
