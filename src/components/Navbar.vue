<template>
  <div class="navbar">
    <v-app-bar color="white" elevation="0">
      <h1 class="main-title" v-if="titleHide">{{ title }}</h1>
      <v-spacer />
      <div class="navbar-search">
        <v-text-field
          hide-details
          dense
          solo
          flat
          clearable
          label="Поиск......"
          append-icon="mdi-magnify"
          height="46"
          width="265"
          background-color="#F5F7FB"
          color="#3A78F2"
        ></v-text-field>
      </div>
      <avatar />
      <v-btn icon fab small color="#979DBB" dense>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Avatar from "@/components/ui/Avatar.vue";
export default {
  components: { Avatar },
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
    title: {
      type: String,
      default: "",
    },
    titleHide: {
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

<style lang="scss" scoped>
.main-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #1c1d20;

  opacity: 0.8;
}
.navbar {
  padding: 50px 0;
  &-search {
    padding-right: 34px;
  }
}
</style>
