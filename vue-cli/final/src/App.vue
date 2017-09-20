<template>
<div>
  <app-header></app-header>
  <main class="pt-4">
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
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

<style lang="scss">
button {
    transition: all 0.3s ease;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
}
</style>
