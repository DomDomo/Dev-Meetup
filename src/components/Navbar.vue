<template>
  <div>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title style="padding-left: 10px">
        <router-link to="/" tag="span" style="cursor: pointer">Dev Meetup</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    sideNav: false,
    menuItems: [
      { title: "View Meetups", icon: "mdi-account-multiple", link: "/meetups" },
      { title: "Organzize Group", icon: "mdi-map-marker", link: "/meetup/new" },
      { title: "Profile", icon: "mdi-account", link: "/profile" },
      { title: "Sign up", icon: "mdi-face", link: "/signup" },
      { title: "Sign in", icon: "mdi-lock-open", link: "/signin" },
    ],
  }),
};
</script>