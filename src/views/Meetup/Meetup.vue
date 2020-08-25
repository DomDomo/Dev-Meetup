<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-card-title class="text-h4 primary--text">{{
            meetup.title
          }}</v-card-title>
          <v-img :src="meetup.imageUrl" height="400"></v-img>
          <v-card-text>
            <div class="info--text text-h6">
              {{ meetup.date | date }} - {{ meetup.location }}
            </div>
            <div class="black--text">
              {{ meetup.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Meetup",
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>
