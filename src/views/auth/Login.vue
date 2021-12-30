<template>
  <div class="login">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col
          class="d-flex justify-center flex-column align-center"
          cols="12"
          sm="5"
        >
          <v-img
            class="mb-12 center"
            width="150"
            src="../../assets/logo.png"
            alt="logo"
          />
          <form class="w-100" autocomplete="off">
            <v-text-field
              required
              outlined
              label="Логин"
              placeholder="Email"
              dense
              height="48"
              v-model="name"
            />
            <v-text-field
              required
              dense
              height="48"
              hide-details
              outlined
              label="Пароль"
              placeholder="Введите пароль"
              :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="hidePassword ? 'text' : 'password'"
              @click:append="hidePassword = !hidePassword"
              v-model="password"
            ></v-text-field>
            <v-btn @click="submitLogin" class="mt-5" block color="#4F8BE4" dark
              >Войти</v-btn
            >
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    hidePassword: false,
    name: "",
    password: "",
  }),
  methods: {
    submitLogin() {
      console.log(this.name, this.password);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-100 {
  width: 100%;
}
</style>
