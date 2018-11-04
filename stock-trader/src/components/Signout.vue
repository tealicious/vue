<template>
  <v-btn color="info" @click="logout">logout</v-btn>
</template>
<script>
import firebase from "firebase";
export default {
  methods: {
    logout() {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("RESET_PORTFOLIO");
          this.$store.commit("RESET_STOCKS");
          this.$store.commit("RESET_USER");
          this.$router.replace("login");
        });
    }
  }
};
</script>