<template>
  <div>
    <v-app-bar app clipped-left color="deep-purple accent-4" dense dark>
      <v-icon @click="menuSwitch()">{{ icon }}</v-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({}),
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    menuSwitch() {
      let drawer = !this.drawer;
      this.$emit("drawer", drawer);
    },
  },
};
</script>

<style lang="scss" scoped></style>
