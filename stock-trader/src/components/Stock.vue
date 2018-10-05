<template>
  <v-flex xs12 sm6 lg4>
    <v-card>
      <v-layout row style="margin:0;">
        <v-flex>
          <v-card-title primary-title class="pa-2">
            <img  :title="stock.CoinName"  :src="'https://www.cryptocompare.com'+stock.ImageUrl" height="100px" width="100px" max-width="100px">
            <div style="text-align:right;margin-left:auto;">
              <h3 class="headline mb-0">{{stock.CoinName}}</h3>
              <div>${{stock.Price}}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pl-3 pr-3 grey lighten-3">
        <v-form ref="form" v-model="valid" lazy-validation class="flex-form">
          <v-text-field v-model="quantity" type="number" label="Quantity" :color="color" :rules="quantityRules"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn flat @click="clear">Clear</v-btn>
          <v-btn :disabled="!valid" :color="color" @click="buyStock">Buy</v-btn>
        </v-form>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      valid: true,
      quantityRules: [
        v => !!v || "Quantity is required",
        v => v > 0 || "Invalid quantity"
      ],
      quantity: null,
      color: "green"
    };
  },
  methods: {
    buyStock() {
      if (this.$refs.form.validate()) {
        const order = {
          id: this.stock.id,
          name: this.stock.name,
          price: this.stock.price
        };
        console.log(order);
        this.clear();
      }
    },
    clear() {
      this.$refs.form.reset();
      this.quantity = null;
    }
  }
};
</script>
<style >
.headline {
  text-transform: uppercase;
}
.flex-form {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>