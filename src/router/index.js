import Vue from "vue";
import VueRouter from "vue-router";

import AuthGuard from "./auth-guard";

import Home from "@/views/Home.vue";
import Meetups from "@/views/Meetup/Meetups.vue";
import CreateMeetup from "@/views/Meetup/CreateMeetup.vue";
import Meetup from "@/views/Meetup/Meetup.vue";
import Profile from "@/views/User/Profile.vue";
import Signin from "@/views/User/Signin.vue";
import Signup from "@/views/User/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meetups",
    name: "Meetups",
    component: Meetups,
  },
  {
    path: "/meetup/new",
    name: "CreateMeetup",
    component: CreateMeetup,
    beforeEnter: AuthGuard,
  },
  {
    path: "/meetup/:id",
    name: "Meetup",
    props: true,
    component: Meetup,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: AuthGuard,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
