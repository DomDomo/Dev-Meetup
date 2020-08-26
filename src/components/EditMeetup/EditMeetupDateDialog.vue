<template>
  <v-dialog persistent v-model="dialog" width="350px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2" outlined color="primary" v-bind="attrs" v-on="on">
        <v-icon left>mdi-calendar-edit</v-icon> Edit Date
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Meetup Date</span>
      </v-card-title>
      <v-card-text ref="cardForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-date-picker
                full-width
                v-model="ediableDate"
                :show-current="false"
              ></v-date-picker>
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
      ediableDate: null,
    };
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.meetup.date);
      const newDay = new Date(this.ediableDate).getUTCDate();
      const newMonth = new Date(this.ediableDate).getUTCMonth();
      const newYear = new Date(this.ediableDate).getUTCFullYear();
      newDate.setUTCDate(newDay);
      newDate.setUTCMonth(newMonth);
      newDate.setUTCFullYear(newYear);
      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        date: newDate,
      });
    },
  },
  created() {
    this.ediableDate = new Date(this.meetup.date).toISOString().substr(0, 10);
  },
};
</script>

<style></style>
