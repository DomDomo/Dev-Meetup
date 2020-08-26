<template>
  <v-dialog persistent v-model="dialog" width="350px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2" outlined color="primary" v-bind="attrs" v-on="on">
        <v-icon left>mdi-clock-outline</v-icon> Edit Time
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Meetup Time</span>
      </v-card-title>
      <v-card-text ref="cardForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-time-picker
                format="24hr"
                v-model="ediableTime"
                header-color="primary"
              ></v-time-picker>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
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
      dialog: false,
      ediableTime: null,
    };
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date);
      const hours = this.ediableTime.match(/^(\d+)/)[1];
      const minutes = this.ediableTime.match(/:(\d+)/)[1];
      newDate.setHours(hours);
      newDate.setMinutes(minutes);

      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        date: newDate,
      });
    },
  },
  created() {
    this.ediableTime = new Date(this.meetup.date);
  },
};
</script>

<style></style>
