<template>
<div class="col-sm-6 col-lg-4">
  <div class="card mb-3">
    <div class="card-header d-flex flex-row justify-content-between align-items-center">
      <h4 class="card-title m-0">{{stock.name}}</h4>
      <h6 class="card-subtitle text-muted m-0">Price: {{stock.price_usd | currency}}</h6>
    </div>
    <div class="card-body">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <input type="number" class="form-control rounded-0 rounded-left" :placeholder="quantity" v-model.number="quantity" />
        <button type="submit" class="btn rounded-0 rounded-right" :class="insufficientFunds || quantity <= 0 ? 'btn-danger' : 'btn-success'" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds">Buy</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex';
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    ...mapGetters(['funds']),
    insufficientFunds() {
      return this.quantity * this.stock.price_usd > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = { // to be sent to portfolio.js file
        id: this.stock.id,
        price: Number(this.stock.price_usd),
        quantity: this.quantity
      };
      console.log(order)
      this.$store.dispatch('buyStock', order); //trigger the 'buyStock method in store.js and pass the order object  as the payload
      this.quantity = 1;
    }
  }
}
</script>
