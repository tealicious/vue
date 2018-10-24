<template>
  <apexcharts
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexcharts>
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
        const hour = moment.unix(history.time).format("H");
        const time = moment.unix(history.time).format("h");
        if (hour > 12) {
          time += " PM";
        } else {
          time += " AM";
        }
        coinTimes.push(time);
      }
      return coinTimes;
    },
    chartOptions() {
      return {
        xaxis: {
          categories: this.times
        },
        stroke: {
          width: [5],
          curve: "smooth"
        },
        chart: {
          animations: {
            enabled: false
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        }
      };
    },
    series() {
      return [
        {
          name: "Price",
          data: this.prices
        }
      ];
    }
  }
};
</script>