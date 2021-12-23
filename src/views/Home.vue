<template>
  <div class="card__wrapper">
    <homeCard
      position="Cотрудников"
      num="30"
      icon="mdi-account-multiple-outline"
    />
    <homeCard
      position="Cотрудников"
      num="30"
      icon="mdi-account-multiple-outline"
    />
    <homeCard
      position="Cотрудников"
      num="30"
      icon="mdi-account-multiple-outline"
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
