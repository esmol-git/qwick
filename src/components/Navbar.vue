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
          border-radius="15"
          outlined
          color="primary"
        ></v-text-field>
      </div>
      <avatar />
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            fab
            small
            color="#979DBB"
            dense
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import Avatar from "@/components/ui/Avatar.vue";
export default {
  components: { Avatar },
  name: "Navbar",
  data: () => ({
    items: [
      { title: "Click Me", to: "/" },
      { title: "Settings ", to: "/family" },
      { title: "Logout", to: "/reports" },
    ],
  }),
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
  font-weight: 700;
  font-size: 28px;
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
