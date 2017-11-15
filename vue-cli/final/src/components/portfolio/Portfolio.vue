<template>
<div class="row">
  <div v-for="(stock, key) in stocks" tag="div" name="fade-slide" mode="out-in" class="col-sm-6 col-lg-4">
    <app-stock :stock="stock" :key="stock.id"></app-stock>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
import Stock from './Stock.vue';
export default {
  computed: {
    ...mapGetters({
      stocks: 'portfolioStocks',
      stocks2: 'staticStocks'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>
<style lang='scss'>
/*.fade-slide-item {
    transition: all 0.25s;
    display: inline-block;
}

.fade-slide-enter,
.fade-slide-leave-to {
    opacity: 0;
    transform: scale(.9);
}

.fade-slide-leave,
.fade-slide-leave-active {
    position: absolute;
}

.fade-slide-enter-active {
    transition-delay: 0.25s;
}*/
</style>
