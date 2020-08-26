<template>
  <v-container>
    <v-row v-if="loading" class="mt-12">
      <v-col cols="12" class="text-center">
        <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-card-title>
            <div class="text-h4 primary--text">{{ meetup.title }}</div>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <DateDialog :meetup="meetup" />
              <TimeDialog :meetup="meetup" />
              <DetailsDialog :meetup="meetup" />
            </template>
          </v-card-title>
          <v-img :src="meetup.imageUrl" height="400"></v-img>
          <v-card-text>
            <div class="info--text text-h6">{{ meetup.date | date }} - {{ meetup.location }}</div>
            <div class="black--text">{{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <RegisterDialog v-if="userIsAuthenticated && !userIsCreator" :meetupId="meetup.id" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailsDialog from "@/components/EditMeetup/EditMeetupDetailsDialog.vue";
import DateDialog from "@/components/EditMeetup/EditMeetupDateDialog.vue";
import TimeDialog from "@/components/EditMeetup/EditMeetupTimeDialog.vue";
import RegisterDialog from "@/components/Registration/RegisterDialog.vue";
export default {
  name: "Meetup",
  props: ["id"],
  components: {
    DetailsDialog,
    DateDialog,
    TimeDialog,
    RegisterDialog,
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id == this.meetup.creatorId;
    },
  },
};
</script>
