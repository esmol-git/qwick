<template>
  <div>
    <v-navigation-drawer
      app
      color="#3A78F2"
      width="270"
      dark
      permanent
      class="navigation-drawer"
    >
      <div class="navigation__logo">Qwick</div>
      <!---->
      <v-list class="menu__list">
        <div class="menu__item-wrapper" v-for="(item, i) in menuList" :key="i">
          <v-list-item class="menu__item" :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <!---->
          <!-- <v-list-group
            :prepend-icon="item.icon"
            v-else-if="item.submenu.length > 0"
            @click="$emit('drawer', false)"
            no-action
            :active-class="item.submenu.to"
          > -->
          <!-- <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template> -->
          <!-- <div v-for="subitem in item.submenu" :key="subitem.title">
              <v-list-item :to="subitem.to" link>
                <v-list-item-icon>
                  <v-icon> mdi-minus-thick</v-icon>
                </v-list-item-icon>

                <v-list-item-title>
                  {{ subitem.title }}
                </v-list-item-title>
              </v-list-item>
            </div> -->
          <!-- </v-list-group> -->
        </div>
      </v-list>
      <div class="navigation__footer">
        <a href="#" class="navigation__footer-link"
          >Политика конфиденциальности</a
        >
        <a href="#" class="navigation__footer-link">Все права защищены</a>
        <a href="#" class="navigation__footer-support"></a>
      </div>
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
          title: "Главная",
          to: "/",
          icon: "mdi-home-outline",
          submenu: [],
        },
        {
          title: "ОФС",
          to: "/family",
          icon: "mdi-family-tree",
        },
        {
          title: "Регламенты",
          to: "/regulatioms",
          icon: "mdi-file-document-outline",
          submenu: [],
        },
        {
          title: "Мои обязанности",
          to: "/duties",
          icon: "mdi-clipboard-text-outline",
          submenu: [],
        },
        {
          title: "Отчеты",
          to: "/reports",
          icon: "mdi-clipboard-text-clock-outline",
          submenu: [],
        },
        {
          title: "Коммуникации",
          to: "/communications",
          icon: "mdi-chat-processing-outline",
          submenu: [],
        },
        {
          title: "Сотрудники",
          to: "/staff",
          icon: "mdi-account-multiple-outline",
          submenu: [],
        },
        {
          title: "Оплата",
          to: "/payment",
          icon: "mdi-wallet-outline",
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

<style lang="scss" scoped>
.navigation-drawer {
  border-radius: 0 40px 40px 0;
  padding: 58px 0 72px 0;
}
.navigation__logo {
  font-weight: bold;
  font-size: 31px;
  line-height: 39px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 50px;
}
.navigation__footer {
  position: absolute;
  bottom: 72px;
  padding-left: 23px;
  &-link {
    font-size: 12px;
    line-height: 16px;
    color: #b6d3ff;
    display: block;
    text-decoration: none;
    margin-bottom: 12px;
    &:nth-child(2) {
      margin-bottom: 24px;
    }
  }
  &-support {
    display: block;
    width: 66px;
    height: 66px;
    background-color: #fff;
    border-radius: 100%;
    background-image: url("../assets/image/icons/support.svg");
    background-position: center;
  }
}
.menu__item-wrapper {
  padding: 0 32px 0 23px;
}
.v-list-item--link:before {
  border-radius: 12px;
}
.menu__item {
  position: relative;
  font-size: 17px;
  line-height: 23px;
  color: #ffffff;
  opacity: 0.8;
  border-radius: 12px;
  &.v-list-item--active {
    position: relative;
    background: #f2f6fc;
    opacity: 1;
    border-radius: 12px;
    &::before {
      //   opacity: 0;
      border-radius: 12px;
    }
    &::after {
      content: "";
      position: absolute;
      right: -37px;
      bottom: 0;
      width: 10px;
      height: 100%;
      background: #dfebf9;
      transition: 0.3s ease-in-out;
      border-radius: 12px;
      opacity: 1;
      z-index: 100;
    }
  }
  &.v-list-item--active .v-list-item__title {
    color: #1c1d20;
    font-weight: bold;
  }
  &.v-list-item--active .v-icon {
    color: #4f8be4;
  }
}
</style>
