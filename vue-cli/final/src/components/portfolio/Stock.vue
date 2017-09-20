<template>
<div class="col-sm-6 col-lg-4">
  <div class="card mb-3">
    <div class="card-header d-flex flex-row justify-content-between align-items-center">
      <h4 class="card-title m-0">{{stock.name}}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price: {{stock.price | currency}}</li>
      <li class="list-group-item">Quantity: {{stock.quantity}}</li>
    </ul>
    <div class="card-body">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <input type="number" class="form-control rounded-0 rounded-left" placeholder="Quantity" v-model.number="quantity" />
        <button type="submit" class="btn rounded-0 rounded-right" :class="invalidQuantity || quantity <= 0 ? 'btn-danger' : 'btn-warning'" @click="sell" :disabled="quantity <= 0 || !Number.isInteger(quantity) || invalidQuantity">Sell</button>
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
import {
  mapGetters
} from 'vuex';
export default {
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    invalidQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  props: ['stock'],
  methods: {
    ...mapActions([
      'sellStock'
    ]),
    sell() {
      const order = { // to be sent to portfolio.js file
        id: this.stock.id,
        price: Number(this.stock.price),
        quantity: this.quantity
      };
      console.log(order)
      this.sellStock(order);
      this.quantity = 1;
    }
  }
}
</script>
