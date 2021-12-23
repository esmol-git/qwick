<template>
  <v-app>
    <navbar :title="$route.name" />
    <sidebar />
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
  data: () => ({}),
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {},
  computed: {},
};
</script>
