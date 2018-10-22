<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout wrap="">
      <v-flex xs12 md8>
        <app-pie-chart></app-pie-chart>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import LineChart from "../components/LineChart.vue";

export default {
  components: {
    appPieChart: PieChart,
    appLineChart: LineChart
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
