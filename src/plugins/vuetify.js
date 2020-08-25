import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#001D52",
        secondary: "#2196f3",
        accent: "#03a9f4",
        error: "#ff5722",
        warning: "#f44336",
        info: "#1266A5",
        success: "#4caf50",
        background: "#FAFAFA",
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
