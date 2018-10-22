<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout row wrap="">
      <app-stock
        v-for="stock in stocks"
        :stock="stock"
        :key="stock.Id"
        :portfolioItem="false"
      ></app-stock>
    </v-layout>
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  data() {
    return {
      number: null,
      name: "Stocks"
    };
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
