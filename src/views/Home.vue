<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" class="text-center text-sm-right">
        <v-btn large router to="/meetups" color="info">Explore Meetups</v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="text-center text-sm-left">
        <v-btn large router to="/meetup/new" color="info"
          >Oraganize Meetups</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            @click="onLoadMeetup(meetup.id)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            class="text-center"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="title">{{ meetup.title }}</div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <p>Join out awesome meetups!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetup/" + id);
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 10px 20px;
}
</style>
