<template>
  <div>
    <v-btn @click="$router.go(-1)">Назад</v-btn>
    <div>{{ USER }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  computed: {
    ...mapGetters(["USER"]),
  },
  mounted() {
    var userId = this.$route.params.userId;
    console.log(userId);
    this.getUser({ id: this.userId });
  },
};
</script>

<style lang="scss" scoped></style>
