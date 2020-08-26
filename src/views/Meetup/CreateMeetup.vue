<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h2 class="text-h4 primary--text font-weight-medium">Create a new Meetup</h2>
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
            :rules="[defaultRules.required]"
            required
          ></v-text-field>
          <v-text-field
            id="location"
            v-model="meetup.location"
            name="location"
            label="Location"
            :rules="[defaultRules.required]"
            required
          ></v-text-field>
          <div v-if="meetup.imageUrl">
            <div class="text-subtitle-2 info--text">Image Preview</div>
            <v-img :src="meetup.imageUrl" height="150"></v-img>
          </div>

          <v-file-input
            prepend-icon
            show-size
            accept="image/*"
            label="Image"
            :rules="[defaultRules.required, defaultRules.fileSize]"
            @change="onFilePicked"
          ></v-file-input>

          <v-textarea
            id="description"
            v-model="meetup.description"
            name="description"
            label="Description"
            :rules="[defaultRules.required]"
            required
          ></v-textarea>
          <div class="text-h4 grey--text text-center mb-4">Pick a Date and Time</div>
          <v-row justify="center">
            <v-date-picker
              style="height: 400px"
              class="ma-5"
              elevation="15"
              v-model="date"
              :show-current="false"
            ></v-date-picker>
            <v-time-picker
              format="24hr"
              style="height: 400px"
              class="ma-5"
              v-model="time"
              elevation="15"
              color="green lighten-1"
              header-color="primary"
            ></v-time-picker>
          </v-row>
          <v-btn color="success" class="mr-4" @click="validate" type="submit">Create Meetup</v-btn>

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
    date: new Date().toISOString().substr(0, 10),
    time: new Date(),
    image: null,
    meetup: {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    defaultRules: {
      required: (v) => !!v || "This field is required",
      fileSize: (v) =>
        !v || v.size < 2000000 || "File size has to be less than 2 MB!",
    },
  }),
  computed: {
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
  },
  methods: {
    validate() {
      this.valid = this.$refs.form.validate();
    },
    onCreateMeetup() {
      if (this.valid && this.image) {
        const meetupData = {
          title: this.meetup.title,
          location: this.meetup.location,
          image: this.image,
          description: this.meetup.description,
          date: this.submittableDateTime,
        };
        this.$store.dispatch("createMeetup", meetupData);
        this.$router.push("/meetups/");
      }
    },
    onFilePicked(file) {
      let filename = file.name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.meetup.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(file);
      this.image = file;
    },
  },
};
</script>
