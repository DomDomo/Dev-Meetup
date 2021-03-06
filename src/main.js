import Vue from "vue";
import App from "./App.vue";

import firebase from "firebase/app";
import "firebase/auth";

import router from "./router";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import DateFilter from "./filters/date";
import AlertCmp from "./components/Alert.vue";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", AlertCmp);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBgfBpmF5_BmP6KpGaee9Q2V7b4K4GMYhw",
      authDomain: "devmeetup-a616b.firebaseapp.com",
      databaseURL: "https://devmeetup-a616b.firebaseio.com",
      projectId: "devmeetup-a616b",
      storageBucket: "devmeetup-a616b.appspot.com",
      messagingSenderId: "147832008441",
      appId: "1:147832008441:web:4665ba6a8bb4017c527c28",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
        this.$store.dispatch("fetchUserData");
      }
    });

    this.$store.dispatch("loadMeetups");
  },
}).$mount("#app");
