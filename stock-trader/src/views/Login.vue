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
                                <v-toolbar-title>Login</v-toolbar-title>
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
                                        :rules="passwordRules"
                                        label="password"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions
                                class="grey lighten-3"
                            >
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="error"
                                    @click="pushRoute('/register')"
                                >Register</v-btn>
                                <v-btn
                                    color="primary"
                                    :disabled="!valid"
                                    @click="submit"
                                >Login</v-btn>
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
    password: "",
    passwordRules: [
      v => !!v || "password is required",
      v => (v && v.length > 5) || "password must be greater than 5 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false
  }),

  methods: {
    submit(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.pushRoute("/user/home");
          })
          .catch(() => {
            this.pushRoute("/login");
          });
      }
    },
    pushRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>