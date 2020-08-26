<template>
  <v-dialog persistent v-model="dialog" width="350px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2" outlined color="primary" v-bind="attrs" v-on="on">
        <v-icon left>mdi-pencil</v-icon> Edit Details
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Meetup</span>
      </v-card-title>
      <v-card-text ref="cardForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                id="title"
                v-model="editedTitle"
                name="title"
                label="Title"
                :rules="[defaultRules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                id="description"
                v-model="editedDescription"
                name="description"
                label="Description"
                :rules="[defaultRules.required]"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="resetDialog">Close</v-btn>
        <v-btn color="blue darken-1" text @click="onSaveChanges">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["meetup"],
  data() {
    return {
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description,
      dialog: false,
      defaultRules: {
        required: (v) => !!v || "This field is required",
      },
    };
  },
  methods: {
    onSaveChanges() {
      if (
        this.editedTitle.trim() === "" ||
        this.editedDescription.trim() === ""
      ) {
        return;
      }
      this.dialog = false;
      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription,
      });
    },
    resetDialog() {
      this.dialog = false;
      this.editedTitle = this.meetup.title;
      this.editedDescription = this.meetup.description;
    },
  },
};
</script>

<style></style>
