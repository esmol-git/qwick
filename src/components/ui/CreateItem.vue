<template>
  <div class="modal">
    <v-card min-height="100vh" class="pa-6">
      <p class="text-right pa-0">
        <v-icon @click="close">mdi-close</v-icon>
      </p>
      <p class="pa-0 mt-2 text-center modal__title">{{ title }}</p>

      <v-card-text class="pa-0 mt-2">
        <v-row no-gutters>
          <v-col cols="12"> </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="pa-0 mt-4">
        <v-btn color="primary" block height="38" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    save() {
      this.$emit("save");
    },
    close() {
      this.dialogCreate = false;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
