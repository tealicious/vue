<template>
  <v-flex xs12 sm6 lg4>
    <v-card>
      <v-layout row style="margin:0;">
        <v-flex>
          <v-card-title
            primary-title
            class="pt-2 pl-2 pr-2 pb-0"
          >
            <a
              class="pa-0 ma-0"
              :href="'https://www.cryptocompare.com'+stock.Url"
              target="_blank"
            >
              <img
                :title="stock.CoinName"
                :src="'https://www.cryptocompare.com'+stock.ImageUrl"
                height="100px"
                width="100px"
                max-width="100px"
              >
            </a>
            <div
              style="text-align:right;margin-left:auto;flex:1;"
            >
              <a
                class="pa-0 ma-0 blue--text"
                :href="'https://www.cryptocompare.com'+stock.Url"
                target="_blank"
              >
                <h3 class="headline mb-0">{{stock.CoinName}}</h3>
              </a>
              <div
                v-if="portfolioItem"
              >Owned: {{stock.Quantity}}</div>
              <div>Value: {{stock.Price | currency}}</div>
              <div
                v-if="portfolioItem"
              >Total Value: {{totalValue | currency}}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <app-line-chart
        :coin="stock"
        v-if="stock.History && stock.History.length > 0"
      ></app-line-chart>
      <v-divider light></v-divider>
      <v-card-actions class="pl-3 pr-3 grey lighten-3">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="flex-form"
        >
          <v-text-field
            v-model="quantity"
            type="number"
            label="Quantity"
            :color="color"
            :rules="quantityRules"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn flat @click="clear">Clear</v-btn>
          <v-btn
            v-if="!portfolioItem"
            :dark="!disableBuy"
            :light="disableBuy"
            :disabled="disableBuy"
            :color="color"
            @click="buyStock"
          >Buy</v-btn>
          <v-btn
            v-else
            :dark="!disableSell"
            :light="disableSell"
            :disabled="disableSell"
            :color="color"
            @click="sellStock"
          >sell</v-btn>
        </v-form>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
import LineChart from "../components/LineChart.vue";
export default {
  components: {
    appLineChart: LineChart
  },
  props: ["stock", "portfolioItem"],
  data() {
    return {
      valid: true,
      quantityRules: [
        v => !!v || "Quantity is required",
        v => v > 0 || "Invalid quantity"
      ],
      quantity: 1,
      color: "primary"
    };
  },
  computed: {
    totalValue() {
      return Math.round(this.stock.Price * this.stock.Quantity * 100) / 100;
    },
    funds() {
      return Math.round(this.$store.getters.funds * 100) / 100;
    },
    disableSell() {
      return (
        parseInt(this.quantity) > parseInt(this.stock.Quantity) ||
        parseInt(this.quantity) < 0
      );
    },
    disableBuy() {
      return this.quantity < 0 || this.quantity * this.stock.Price > this.funds;
    }
  },
  methods: {
    buyStock() {
      if (this.$refs.form.validate()) {
        const order = {
          stockId: this.stock.Id,
          stockName: this.stock.Name,
          Quantity: this.quantity,
          stockPrice: this.stock.Price
        };
        this.$store.dispatch("buyStock", order);
        this.clear();
      }
    },
    sellStock() {
      if (this.$refs.form.validate()) {
        const order = {
          stockId: this.stock.Id,
          Quantity: this.quantity,
          stockPrice: this.stock.Price
        };
        this.$store.dispatch("sellStock", order);
        this.clear();
      }
    },
    clear() {
      //this.$refs.form.reset();
      this.quantity = 1;
    }
  }
};
</script>