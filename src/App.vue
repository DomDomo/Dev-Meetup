<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({}),
};
</script>
