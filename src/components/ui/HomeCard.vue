<template>
  <div class="card">
    <v-card class="pa-5 card" width="225" height="264" rounded="8">
      <v-icon color="#3A78F2" large>{{ icon }}</v-icon>
      <v-card-text class="pa-0 mt-3 card__text">Cотрудников</v-card-text>
      <v-card-text class="pa-0 mt-2 card__num">30</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    position: {
      type: String,
      default: "",
    },
    num: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
}
.card__num {
  font-weight: 600;
  font-size: 27px;
  line-height: 37px;
  color: #000000;
}
.card__text {
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
}
</style>
