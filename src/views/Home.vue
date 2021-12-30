<template>
  <div class="card__wrapper">
    <homeCard
      position="Cотрудников"
      num="30"
      icon="mdi-account-multiple-outline"
    />
    <homeCard position="Руководителей" num="14" icon="mdi-account-tie" />
    <homeCard
      position="Заходило сегодня"
      num="122"
      icon="mdi-account-switch-outline"
    />
  </div>
</template>

<script>
import homeCard from "@/components/ui/HomeCard.vue";
export default {
  name: "Home",
  components: { homeCard },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.card__wrapper {
  display: flex;
  gap: 20px;
}
</style>
