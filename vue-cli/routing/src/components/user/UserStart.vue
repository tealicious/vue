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
  }
}
</script>

<style scoped>
  .list-group-item{
    cursor: pointer;
  }
</style>
