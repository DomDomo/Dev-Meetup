<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3" v-if="error">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form ref="form" @submit.prevent="onSignin">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      id="email"
                      v-model="email"
                      :rules="[rules.required, rules.validEmail]"
                      type="email"
                      label="E-mail"
                      required
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      v-model="password"
                      :rules="[rules.required]"
                      type="password"
                      name="password"
                      label="Password"
                    ></v-text-field>

                    <v-btn
                      color="success"
                      class="mr-4"
                      @click="validate"
                      type="submit"
                      :loading="loading"
                      :disabled="loading"
                    >Sign in</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    rules: {
      required: (v) => !!v || "This field is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
      validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    validate() {
      this.valid = this.$refs.form.validate();
    },
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      });
    },
    onDismissed() {
      console.log("Dissmessed Alert");
      return this.$store.dispatch("clearError");
    },
  },
};
</script>
