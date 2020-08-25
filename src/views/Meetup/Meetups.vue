<template>
  <v-container>
    <v-row v-for="meetup in meetups" :key="meetup.id">
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info" dark>
          <v-container fluid>
            <v-row class="pl-3">
              <v-col cols="5" sm="4" md="3">
                <v-img
                  :src="meetup.imageUrl"
                  height="130"
                  class="rounded"
                ></v-img>
              </v-col>
              <v-col cols="7" sm="8" md="9">
                <v-card-title class="text-h4">{{ meetup.title }}</v-card-title>
                <v-card-subtitle>{{ meetup.date | date }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn text :to="'/meetup/' + meetup.id">
                    <v-icon left>mdi-arrow-right</v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Meetups",
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>
