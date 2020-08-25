<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h2 class="text-h4 primary--text font-weight-medium">
          Create a new Meetup
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-form ref="form" @submit.prevent="onCreateMeetup">
          <v-text-field
            id="title"
            v-model="meetup.title"
            name="title"
            label="Title"
            :rules="defaultRules"
            required
          ></v-text-field>
          <v-text-field
            id="location"
            v-model="meetup.location"
            name="location"
            label="Location"
            :rules="defaultRules"
            required
          ></v-text-field>
          <div v-if="meetup.imageUrl">
            <div class="text-subtitle-2 info--text">
              Image Preview
            </div>
            <v-img :src="meetup.imageUrl" height="150"></v-img>
          </div>
          <v-text-field
            id="image-url"
            v-model="meetup.imageUrl"
            name="ImageUrl"
            label="Image URL"
            :rules="defaultRules"
            required
          ></v-text-field>

          <v-textarea
            id="description"
            v-model="meetup.description"
            name="description"
            label="Description"
            :rules="defaultRules"
            required
          ></v-textarea>
          <v-btn color="success" class="mr-4" @click="validate" type="submit">
            Create Meetup
          </v-btn>

          <v-img></v-img>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateMeetup",
  data: () => ({
    valid: false,
    meetup: {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    defaultRules: [(v) => !!v || "This field is required"],
  }),
  methods: {
    validate() {
      this.valid = this.$refs.form.validate();
    },
    onCreateMeetup() {
      if (this.valid) {
        const meetupData = {
          ...this.meetup,
          date: new Date(),
        };
        this.$store.dispatch("createMeetup", meetupData);
        this.$router.push("/meetups/");
      }
    },
  },
};
</script>
