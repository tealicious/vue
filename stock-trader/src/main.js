import "@babel/polyfill";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./scss/app.scss";
export const fireBase = "https://stock-trader-b44bf.firebaseio.com/";
export const cryptoCompare = "https://min-api.cryptocompare.com/data";

Vue.config.productionTip = false;

Vue.filter("currency", value => {
  if (!value) {
    return;
  }
  return "$" + value.toLocaleString();
});

Vue.mixin({
  methods: {
    roundToTwo(value) {
      return Math.round(value * 100) / 100;
    }
  },
  computed: {
    funds() {
      return this.roundToTwo(this.$store.getters.funds);
    },
    portfolioValue() {
      return this.roundToTwo(this.$store.getters.portfolioValue);
    },
    totalWorth() {
      return this.roundToTwo(this.funds + this.portfolioValue);
    },
    coinCount() {
      if (!this.$store.getters.portfolio) {
        return;
      }
      return this.$store.getters.portfolio.length;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
