<template>
  <v-app light class="authscreen">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6 lg4>
            <div class="header">
              <img src="../assets/Bitcoin-512.png">
            </div>
            <v-card class="elevation-3">
              <v-toolbar dark :color="optionLogin ? 'primary' : 'deep-orange'">
                <v-toolbar-title>{{formTitle}}</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="grey lighten-4">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" label="password" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="grey lighten-3">
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid" @click="login" v-if="optionLogin">Login</v-btn>
                <v-btn v-else color="deep-orange" :disabled="!valid" @click="signup">signup</v-btn>
              </v-card-actions>
            </v-card>
            <a class="text-xs-center mt-4" style="width:100%;" @click="optionLogin = !optionLogin">
              <v-icon v-if="!optionLogin">chevron_left</v-icon>
              {{!optionLogin ? "Back to Login." : "Need an account? Register Here."}}
              <v-icon v-if="optionLogin">chevron_right</v-icon>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    optionLogin: true,
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
  computed: {
    formTitle() {
      return this.optionLogin ? "Login" : "Sign Up";
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.pushRoute("/user/home");
          })
          .catch(err => {
            alert(err);
            this.pushRoute("/login");
          });
      }
    },
    signup() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("register", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.login();
          })
          .catch(err => alert(err));
      }
    },
    pushRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>