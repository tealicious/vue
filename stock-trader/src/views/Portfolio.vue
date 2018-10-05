<template>
  <div class="portfolio">
    <h1>{{ name }}</h1>
    <v-layout row wrap>
      <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id" :portfolioItem="true"></app-stock>
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
      name: "Portfolio"
    };
  },
  computed: {
    stocks() {
      return this.$store.getters.portfolio;
    }
  }
};
</script>
