<template>
  <div class="card">
    <v-card class="pa-5 card" width="225" height="264">
      <v-icon large>{{ icon }}</v-icon>
      <v-card-text class="pa-0 mt-3 card__text">{{ position }}</v-card-text>
      <v-card-text class="pa-0 mt-2 card__num">{{ num }}</v-card-text>
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
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  z-index: 1;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    box-shadow: 2px 4px 25px rgba(42, 83, 145, 0.4);
    background: linear-gradient(
      214.01deg,
      rgba(171, 108, 231, 0.8) 1.1%,
      #9575cd 98.17%
    );
    opacity: 0;
    transition: 0.5s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    z-index: -1;
  }
  i {
    color: #9575cd;
  }
  &:hover {
    .card::before {
      opacity: 1;
    }
    i {
      color: white;
    }
    .card__num {
      color: white;
    }
    .card__text {
      color: white;
    }
  }
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
