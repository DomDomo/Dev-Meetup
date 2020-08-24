<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12" sm="6" class="text-center text-sm-right">
        <v-btn large router to="/meetups" color="info">Explore Meetups</v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="text-center text-sm-left">
        <v-btn large router to="/meetup/new" color="info">Oraganize Meetups</v-btn>
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
  data: () => ({
    meetups: [
      {
        id: "sdfjlsfjlsfj",
        title: "Meetup in New York",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F04%2F12%2F104400487-Empire_state_building_nyc.1910x1000.jpg%3Fv%3D1492015557&f=1&nofb=1",
      },
      {
        id: "qwertyuikjnhbf",
        title: "Meetup in Paris",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2735806%2Fimages%2Fo-PARIS-facebook.jpg&f=1&nofb=1",
      },
    ],
  }),
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
