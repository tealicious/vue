<template>
  <div>
    <h3>User Details</h3>
    <p>User Name: {{ $route.params.id }}</p>
    <router-link class="btn btn-info"
                 tag="button"
                 :to="link"> Edit Details
    </router-link>
    <!-- old way
        :to="'/user/' + $route.params.id + '/edit'" -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
            name: 'userEdit',
            params: {
              id: this.$route.params.id //tack 'this' onto any data binding coming out of the template
            },
            query: {
              locale: 'en',
              q: 100
            },
            hash: '#data' // we need to explicitly tell vue-router to act on hash links to ID elements. This is done on the global router object created in the main.js file
        }
      }
    }
  }
</script>
