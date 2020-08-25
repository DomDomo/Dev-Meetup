<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form ref="form">
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
                      :rules="[rules.required, rules.min]"
                      type="password"
                      name="password"
                      label="Password"
                    ></v-text-field>
                    <v-text-field
                      id="confirm_password"
                      v-model="confirmPassword"
                      :rules="[comparePasswords]"
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password"
                    ></v-text-field>

                    <v-btn
                      color="success"
                      class="mr-4"
                      @click="validate"
                      type="submit"
                    >
                      Sign up
                    </v-btn>
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
    confirmPassword: "",
    rules: {
      required: (v) => !!v || "This field is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
      validEmail: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : true;
    },
  },
  methods: {
    validate() {
      this.valid = this.$refs.form.validate();
    },
    onSignup() {
      console.log({
        email: this.email,
        password: this.password,
        conPassword: this.confirmPassword,
      });
    },
  },
};
</script>
