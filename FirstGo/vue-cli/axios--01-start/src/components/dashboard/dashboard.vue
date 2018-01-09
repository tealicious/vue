<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <div v-if="email">
      <p>Your email address: {{email}}</p>
    </div>
    <div v-else>
      <p>Please login or sign up to use the dashboard!</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  computed: {
    email() {
      let user = this.$store.getters.user;
      return !user ? false : user.email;
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
  }
};
</script>
<style scoped>
h1,
p {
  text-align: center;
}
p {
  color: red;
}
</style>