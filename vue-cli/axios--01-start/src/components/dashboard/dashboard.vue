<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{email}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: ""
    };
  },
  created() {
    axios
      .get("/users.json")
      .then(response => {
        const data = response.data; //json object of users
        const users = []; // begin converting the json object to an array of users
        for (let key in data) {
          // key = object key
          const user = data[key]; // for each object in the data json object, assign it to a variable and reconstruct it as an indiviual object
          user.id = key; // add new property
          users.push(user); // reconstruct our own array
        }
        this.email = users[0].email; //assign one to the email key in this.data
        console.log(data, users);
      })
      .catch(error => console.log(error));
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