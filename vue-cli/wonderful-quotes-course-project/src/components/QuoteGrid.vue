<template>
  <div class='row'>
    <single-quote v-for="quote in quotes">{{quote}}</single-quote>
  </div>
</template>
<script>
  import Quote from './Quote.vue'
  export default {
    props: ['quotes'],
    components: {
      singleQuote: Quote
    }
  }
</script>
<style>
</style>
