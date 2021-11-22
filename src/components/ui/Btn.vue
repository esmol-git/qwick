<template>
  <div class="btn">
    <v-btn :color="colorBtn" @click="click" outlined depressed>
      <v-icon :color="colorIcon"> {{ icon }} </v-icon>
      {{ titleBtn }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: {
    titleBtn: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    colorBtn: {
      type: String,
      default: "",
    },
    colorIcon: {
      type: String,
      default: "",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped></style>
