<template>
  <v-dialog persistent v-model="dialog" max-width="350">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="ma-2"
        dark
        color="primary"
        v-bind="attrs"
        v-on="on"
      >{{ userIsRegistered ? 'Unregister' : 'Register' }}</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline" v-if="userIsRegistered">Unregister from Meetup?</v-card-title>
      <v-card-title class="headline" v-else>Register for Meetup?</v-card-title>
      <v-card-text>You can always change your decision later on.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="green darken-1" text @click="onAgree">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["meetupId"],
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    userIsRegistered() {
      return (
        this.$store.getters.user.registeredMeetups.findIndex((meetupId) => {
          return meetupId == this.meetupId;
        }) >= 0
      );
    },
  },
  methods: {
    onAgree() {
      this.dialog = false;
      if (this.userIsRegistered) {
        this.$store.dispatch("unregisterUserFromMeetup", this.meetupId);
      } else {
        this.$store.dispatch("registerUserForMeetup", this.meetupId);
      }
    },
  },
};
</script>

<style></style>
