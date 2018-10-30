<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout wrap="" align-start>
      <v-flex xs12 md3>
        <v-card>
          <v-card-text>
            <div>
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
          </v-card-text>
          <v-card-actions>
            <app-signout></app-signout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <app-pie-chart></app-pie-chart>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import appSignout from "../components/Signout.vue";
import PieChart from "../components/PieChart.vue";
import LineChart from "../components/LineChart.vue";

export default {
  components: {
    appPieChart: PieChart,
    appLineChart: LineChart,
    appSignout
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
