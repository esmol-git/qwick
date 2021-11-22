<template>
  <v-app>
    <v-main id="app">
      <AppLayout>
        <router-view />
      </AppLayout>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
