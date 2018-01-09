<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class="list-group-item"
                         v-for="user in users"
                         :to="user.path"
                         tag="li">User: {{ user.name }}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
      return {
          users: [
            { name: "Daniel", path:"/user/Daniel" },
            { name: "Micheal", path:"/user/Micheal" },
            { name: "King Rob", path:"/user/King Rob" }
          ]
      }
  },
  // You can use beforeRouteEnter to check for some form of verification or validations before the page is allowed to load....
  beforeRouteEnter(to, from, next) { //notice the method name and structure changes inside the vue component
    console.log('inside .vue component setup');
    if (true) {
      next(); // explicitly tell beforeEach method to allow route actions to continues
    }
  }
}
</script>

<style scoped>
  .list-group-item{
    cursor: pointer;
  }
</style>
