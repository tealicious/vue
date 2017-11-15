<template>
<div>
  <app-header></app-header>
  <main class="pt-4">
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'app',
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

.fade-enter-active,
.fade-leave-active {
    transition: all 0.35s;
    transform: scale(1);
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    transform: scale(.9);
    opacity: 0;
}
</style>
