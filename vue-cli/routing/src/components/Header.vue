<template>
  <ul class="nav nav-pills">
    <!-- Give router-link component a tag to be respresented by in the DOM and pass it an active class -->
    <router-link tag="li" active-class="active" :to="routes.home" exact><a>Home</a></router-link>
    <router-link tag="li" active-class="active" :to="routes.user"><a>User</a></router-link>
  </ul>
</template>
<script>
 export default {
   data() {
     return {
       routes: {
         home: '/', //can't be empty, must be a slash
         user: '/user'
       }
     }
   }
 }
</script>

<style scoped>
li {
  background-color:transparent;
  transition: background-color .2s ease;
}
.active {
  transition: background-color .2s ease;
}
</style>
