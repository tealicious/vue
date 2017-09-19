<template>
<div class="col-sm-6 col-lg-4">
  <div class="card mt-3">
    <div class="card-header d-flex flex-row justify-content-between align-items-center">
      <h4 class="card-title m-0">{{stock.name}}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price: {{stock.price}}</li>
      <li class="list-group-item">Quantity: {{stock.quantity}}</li>
    </ul>
    <div class="card-body">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <input type="number" class="form-control rounded-0 rounded-left" placeholder="quantity" v-model.number="stock.quantity" />
        <button type="submit" class="btn btn-warning rounded-0 rounded-right" style="cursor:pointer" @click="sell" :disabled="stock.quantity <= 0 || !Number.isInteger(stock.quantity)">Sell</button>
      </div>
    </div>
    <div class="card-footer text-muted">
      {{stock.id}}
    </div>
  </div>
</div>
</template>
<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ['stock'],
  methods: {
    ...mapActions([
      'sellStock'
    ]),
    // data() {
    //   quantity: 0
    // },
    sell() {
      const order = { // to be sent to portfolio.js file
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
    }
  }
}
</script>
