<template>
  <div>
    <v-navigation-drawer
      app
      clipped
      color="deep-purple accent-4"
      dark
      :value="drawer"
      :mini-variant="drawer"
      mini-variant-width="62"
      permanent
    >
      <!---->
      <v-list class="menu__list">
        <div class="menu__item-wrapper" v-for="(item, i) in menuList" :key="i">
          <v-list-item
            class="menu__item"
            :to="item.to"
            v-if="item.submenu.length === 0"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <!---->
          <v-list-group
            :prepend-icon="item.icon"
            v-else-if="item.submenu.length > 0"
            @click="$emit('drawer', false)"
            no-action
            :value="drawer ? !drawer : ''"
            :active-class="item.submenu.to"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <div v-for="subitem in item.submenu" :key="subitem.title">
              <v-list-item :to="subitem.to" link>
                <v-list-item-icon>
                  <v-icon> mdi-minus-thick</v-icon>
                </v-list-item-icon>

                <v-list-item-title>
                  {{ subitem.title }}
                </v-list-item-title>
              </v-list-item>
            </div>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      group: null,
    };
  },
  computed: {
    menuList: function () {
      let menu = [
        {
          title: "Home",
          to: "/",
          icon: "mdi-home",
          submenu: [],
        },
        {
          title: "Orders",
          to: "/orders",
          icon: "mdi-clipboard-clock",
          submenu: [
            {
              title: "inProgress",
              to: "/reports",
            },
            { title: "Arhive", to: "/" },
          ],
        },
        {
          title: "Transportation task",
          to: "/tasks",
          icon: "mdi-truck",
          submenu: [],
        },
        {
          title: "Users",
          to: "/users",
          icon: "mdi-account",
          submenu: [],
        },
        {
          title: "Directories",
          to: "/directories",
          icon: "mdi-book-open",
          submenu: [
            { title: "List of scales", to: "/" },
            {
              title: "List of scales sites",
              icon: "mdi-clipboard-clock",
              to: "/",
            },
            {
              title: "List of companies",
              to: "/",
            },
            { title: "List of vehicles", to: "/" },
            {
              title: "List of transported materials",
              to: "/",
            },
            {
              title: "List of units measure",
              to: "/",
            },
          ],
        },
        {
          title: "Reports",
          to: "/report",
          icon: "mdi-alert-circle",
          submenu: [],
        },
        {
          title: "Settings",
          to: "/settings",
          icon: "mdi-cog",
          submenu: [],
        },
        {
          title: "Logout",
          to: "/logout",
          icon: "mdi-logout",
          submenu: [],
        },
      ];
      return menu;
    },
  },

  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
