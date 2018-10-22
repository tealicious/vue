<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{coin.Name}}</h3>
      </div>
    </v-card-title>
    <apexcharts
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </v-card>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import moment from "moment";
export default {
  components: {
    apexcharts: VueApexCharts
  },
  props: ["coin"],
  data() {
    return {};
  },
  computed: {
    history() {
      return this.coin.History;
    },
    prices() {
      const coinPrices = [];
      for (let history of this.history) {
        coinPrices.push(history.close);
      }
      return coinPrices;
    },
    times() {
      const coinTimes = [];
      for (let history of this.history) {
        console.log(moment.unix(history.time).format("h:mm"));
        coinTimes.push(moment.unix(history.time).format("H:mm"));
      }
      return coinTimes;
    },
    chartOptions() {
      return {
        labels: [],
        xaxis: {
          categories: this.times
        },
        stroke: {
          width: [5],
          curve: "smooth"
        }
      };
    },
    series() {
      return [
        {
          name: "Prices",
          data: this.prices
        }
      ];
    }
  }
};
</script>