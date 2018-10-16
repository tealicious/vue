<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout wrap>
      <v-flex xs12 sm6 md6>
        <v-card class="pa-3">
          <p class="mb-2"><strong>Funds: {{funds | currency}}</strong></p>
          <p class="mb-2"><strong>Portfolio: {{portfolioValue | currency}}</strong></p>
          <p class="mb-2"><strong>Total: {{totalWorth | currency}}</strong></p>
          <p class="mb-2"><strong>Diversity: {{coinCount}} Coins</strong></p>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Portfolio Value By Coin</h3>
            </div>
          </v-card-title>
          <apexcharts type="donut" :options="chartOptions" :series="series">
          </apexcharts>
        </v-card>
      </v-flex>
    </v-layout>
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
