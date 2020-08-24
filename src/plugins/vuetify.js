import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#2196f3",
        accent: "#03a9f4",
        error: "#ff5722",
        warning: "#f44336",
        info: "#009688",
        success: "#4caf50",
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
