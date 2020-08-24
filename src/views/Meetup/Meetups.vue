<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info" dark>
          <v-container fluid>
            <v-row>
              <v-col cols="5" sm="4" md="3">
                <v-img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F04%2F12%2F104400487-Empire_state_building_nyc.1910x1000.jpg%3Fv%3D1492015557&f=1&nofb=1"
                  height="130"
                ></v-img>
              </v-col>
              <v-col cols="7" sm="8" md="9">
                <v-card-title class="text-h4">My Meetup</v-card-title>
                <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
                <v-card-actions>
                  <v-btn text to="/meetup/1">
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
  components: {},
};
</script>
