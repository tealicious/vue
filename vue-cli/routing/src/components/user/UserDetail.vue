<template>
  <div>
    <h3>User Details</h3>
    <p>User Name: {{ $route.params.id }}</p>
    <router-link class="btn btn-info"
                 tag="button"
                 :to="{ name: 'userEdit', params: { id: $route.params.id}, query: { locale: 'en', q: 100 } }">
                 Edit Details
    </router-link>
    <!-- old way
        :to="'/user/' + $route.params.id + '/edit'" -->
  </div>
</template>

<script>
  export default {
  }
</script>
