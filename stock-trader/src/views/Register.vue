<template>
    <v-app light class="authscreen">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4 lg3>
                        <div class="header">
                            <img
                                src="../assets/Bitcoin-512.png"
                            >
                        </div>
                        <v-card class="elevation-3">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Register</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                        :rules="[passwordRules.required, passwordRules.min]"
                                        :type="show1 ? 'text' : 'password'"
                                        label="Password"
                                        @click:append="show1 = !show1"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions
                                class="grey lighten-3"
                            >
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="error"
                                    @click="pushRoute('/login')"
                                >login</v-btn>
                                <v-btn
                                    color="primary"
                                    :disabled="!valid"
                                    @click="submit"
                                >Submit</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show1: false,
    password: "",
    passwordRules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false
  }),

  methods: {
    pushRoute(route) {
      this.$router.push(route);
    },
    submit(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        return this.$store
          .dispatch("register", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$store
              .dispatch("login", {
                email: this.email,
                password: this.password
              })
              .then(() => {
                this.$router.push("/user/home");
              });
          })
          .catch(err => alert(err));
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>