<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card>
          <v-card-title class="text-h4 primary--text">My Meetup</v-card-title>
          <v-img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F04%2F12%2F104400487-Empire_state_building_nyc.1910x1000.jpg%3Fv%3D1492015557&f=1&nofb=1"
            height="400"
          ></v-img>
          <v-card-text>
            <div class="info--text">17th of July - Where it is at</div>
            <div
              class="black--text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae aliquid exercitationem blanditiis assumenda praesentium fuga sit inventore obcaecati debitis repudiandae modi excepturi nulla, error possimus distinctio repellat nihil omnis.</div>
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
  name: "Meetups",
  components: {},
};
</script>
