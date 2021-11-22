<template>
  <v-card>
    <v-card-title class="text-center title d-block pb-0"> Delete </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="#7FCE6C"
        class="white--text text-capitalize"
        width="115"
        @click="confirm"
      >
        delete
        <v-icon right small>done</v-icon>
      </v-btn>
      <v-btn
        color="#ED6A6A"
        class="white--text text-capitalize"
        width="115"
        @click="close"
      >
        close

        <v-icon right small>close</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>
