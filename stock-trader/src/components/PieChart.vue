<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Portfolio Value By Coin</h3>
        <p class="mb-2">
          <strong>Funds: {{funds | currency}}</strong>
        </p>
        <p class="mb-2">
          <strong>Portfolio: {{portfolioValue | currency}}</strong>
        </p>
        <p class="mb-2">
          <strong>Total: {{totalWorth | currency}}</strong>
        </p>
        <p class="mb-2">
          <strong>Diversity: {{coinCount}} Coins</strong>
        </p>
      </div>
    </v-card-title>
    <apexcharts
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </v-card>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexcharts: VueApexCharts
  },
  computed: {
    chartOptions() {
      const coinNames = [];
      for (let coin of this.$store.getters.portfolio) {
        coinNames.push(coin.CoinName);
      }
      return {
        labels: coinNames,
        tooltip: {
          x: {
            show: false
          },
          y: {
            show: false
          },
          z: {
            show: false
          }
        }
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