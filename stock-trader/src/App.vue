<template>
  <v-app light>
    <app-nav :hasLoadedPortfolio="hasLoadedPortfolio"></app-nav>
    <v-content>
      <div
        v-if="hasLoadedPortfolio"
        class="container grid-list-lg"
      >
        <router-view/>
      </div>
      <div v-else class="loader-wrap">
        <v-progress-circular
          indeterminate
          :size="50"
          color="#1f2f46"
        ></v-progress-circular>
      </div>
    </v-content>
    <app-foot></app-foot>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Foot from "./components/Foot.vue";
import Save from "./components/Save.vue";
export default {
  components: {
    appNav: Nav,
    appFoot: Foot,
    appSave: Save
  },
  computed: {
    callsStocks() {
      return this.$store.getters.callsStocks;
    },
    callsHistories() {
      return this.$store.getters.callsHistories;
    },
    hasLoadedPortfolio() {
      return this.$store.getters.hasLoaded;
    }
  },
  watch: {
    callsStocks: function() {
      setTimeout(() => {
        this.getStockPricesOnly();
      }, 30000);
    },
    callsHistories: function() {
      setTimeout(() => {
        this.$store.dispatch("setHistoricalPrices");
      }, 1800000);
    }
  },
  methods: {
    getStockPricesOnly() {
      return this.$store.dispatch("setCoinPrices").then(() => {
        console.log(this.$store.state.stocks.stocks[0].Price);
      });
    },
    getStocks() {
      return this.$store.dispatch("setStocks").then(() => {
        return this.$store.dispatch("setCoinPrices").then(() => {
          return this.$store.dispatch("setHistoricalPrices");
        });
      });
    },
    getStocksAndPortfolio() {
      this.getStocks().then(() => {
        this.$store.dispatch("loadPortfolio");
      });
    }
  },
  created() {
    this.getStocksAndPortfolio();
  }
};
</script>
