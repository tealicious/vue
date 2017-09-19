<template>
<div>
  <app-header></app-header>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
    this.$store.dispatch('initCrypto');
  }
}
</script>

<style>

</style>
