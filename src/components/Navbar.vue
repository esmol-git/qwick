<template>
  <div>
    <v-app-bar app clipped-left color="deep-purple accent-4" dense dark>
      <v-icon @click="menuSwitch()">mdi-format-indent-increase</v-icon>
      <v-spacer></v-spacer>

      <v-btn tile color="transparent" elevation="0">
        <v-icon left>mdi-home</v-icon>
        Home
      </v-btn>

      <v-btn tile color="transparent" elevation="0">
        <v-icon left>mdi-table</v-icon>
        Table
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    drawer: {
      type: Boolean,
      default: true,
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
