<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <h2 class="mt-3">
      <strong>Funds: {{funds | currency}}</strong>
    </h2>
    <h2 class="mt-3">
      <strong>Portfolio: {{portfolioValue | currency}}</strong>
    </h2>
    <h2 class="mt-3">
      <strong>Total: {{totalWorth | currency}}</strong>
    </h2>
    <h2 class="mt-3">
      <strong>Diversity: {{coinCount}} Coins</strong>
    </h2>
    <apexcharts type="donut" :options="chartOptions" :series="series">
    </apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexcharts: VueApexCharts
  },
  data() {
    return {
      name: "Home"
    };
  },
  computed: {
    chartOptions() {
      const coinNames = [];
      for (let coin of this.$store.getters.portfolio) {
        coinNames.push(coin.CoinName);
      }
      return {
        labels: coinNames
      };
    },
    series() {
      const coinCount = [];
      for (let coin of this.$store.getters.portfolio) {
        coinCount.push(coin.Quantity * coin.Price);
      }
      return coinCount;
    }
  }
};
</script>
