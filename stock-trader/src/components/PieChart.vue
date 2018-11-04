<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Portfolio Value By Coin</h3>
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
    coinsOnHand() {
      return this.$store.getters.portfolio.length > 0;
    },
    chartOptions() {
      const coinNames = [];
      if (this.coinsOnHand) {
        for (let coin of this.$store.getters.portfolio) {
          coinNames.push(coin.CoinName);
        }
      } else {
        coinNames.push("No Coins");
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
      if (!this.coinsOnHand) {
        coinCount.push(1);
      } else {
        for (let coin of this.$store.getters.portfolio) {
          coinCount.push(parseInt(coin.Quantity * coin.Price));
        }
      }
      return coinCount;
    }
  }
};
</script>