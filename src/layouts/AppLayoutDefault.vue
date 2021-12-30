<template>
  <v-app>
    <navbar :title="$route.name" />
    <sidebar @click="openModal" />
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    <v-dialog width="600px" v-model="dialog">
      <modals />
    </v-dialog>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Modals from "../components/ui/Modals.vue";
export default {
  components: { Navbar, Sidebar, Modals },
  data: () => ({ dialog: false }),
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    openModal() {
      this.dialog = true;
    },
  },
  computed: {},
};
</script>
<style lang="scss"></style>
