<template>
<div class="col-sm-6 col-lg-4">
  <div class="card mt-3">
    <div class="card-header d-flex flex-row justify-content-between align-items-center">
      <h4 class="card-title m-0">{{stock.name}}</h4>
      <h6 class="card-subtitle text-muted m-0">Price: {{stock.price_usd}}</h6>
    </div>
    <div class="card-body">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <input type="number" class="form-control rounded-0 rounded-left" placeholder="quantity" v-model.number="quantity" />
        <button type="submit" class="btn btn-success rounded-0 rounded-right" style="cursor:pointer" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = { // to be send to portfolio.js file
        id: this.stock.id,
        price: this.stock.price_usd,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStock', order); //order is the payload
      this.quantity = 0;
    }
  }
}
</script>
