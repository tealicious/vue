<template>
  <v-app light>
    <app-nav></app-nav>
    <v-content>
      <div class="container grid-list-lg">
        <router-view />
        <!-- <app-save></app-save> -->
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
    calls() {
      return this.$store.getters.calls;
    }
  },
  watch: {
    calls: function() {
      setTimeout(() => {
        this.getStocks();
      }, 30000);
    }
  },
  methods: {
    getStocks() {
      return this.$store.dispatch("setStocks").then(() => {
        this.$store.dispatch("setStockPrices");
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
