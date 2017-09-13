<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <!-- <p>Loaded ID passed via props: {{id}}</p> -->
    <button class="btn btn-danger" @click="navigateToHome">Git Outa Here!</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     id: this.$route.params.id // the route id paramaeter is gettable as data for use, but will not update automatically if routes are built in the same component.For that, we need a watch() command
    //   }
    // },
    //props: ['id'], //OR we can just pass it as a prop form the routes.js file now
    // watch: {
    //   '$route'(to, from){
    //     this.id = to.params.id; // watch the to method on the vue-router and update 'id' in this component
    //   }
    // },
    methods: {
      navigateToHome() {
        this.$router.push('/'); //just push the path to the router object, it will update the URL
      }
    }
  }
</script>
