<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout wrap="">
      <v-flex
        xs12
        md6
        v-for="(history, i) in histories"
        :key="i"
      >
        <app-line-chart
          :coin="history"
          v-if="history.History.length > 0"
        ></app-line-chart>
      </v-flex>
      <v-flex xs12 md6>
        <app-pie-chart></app-pie-chart>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card class="pa-3">
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
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import LineCharts from "../components/LineCharts.vue";

export default {
  components: {
    appPieChart: PieChart,
    appLineChart: LineCharts
  },
  data() {
    return {
      name: "Home"
    };
  },
  computed: {
    histories() {
      return this.$store.getters.histories;
    }
  }
};
</script>
