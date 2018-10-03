<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout row wrap>
      <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
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
      name: "Stocks",
      stocks: [
        {
          id: 1,
          name: "ibm",
          price: 100
        },
        {
          id: 2,
          name: "ibm",
          price: 100
        },
        {
          id: 3,
          name: "ibm",
          price: 100
        },
        {
          id: 4,
          name: "ibm",
          price: 100
        },
        {
          id: 5,
          name: "ibm",
          price: 100
        },
        {
          id: 6,
          name: "ibm",
          price: 100
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
</style>
