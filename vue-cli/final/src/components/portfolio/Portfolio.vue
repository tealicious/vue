<template>
<div class="row">
  <app-stock v-for="stock in portfolioStocks" :stock="stock"></app-stock>
  <!--   I have been unable to pass props to the portfolio portfolioStocks.vue file, no idea why.
  "[Vue warn]: Property or method "stock" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option." -->

  <div v-for="stock in portfolioStocks" class="col-sm-6 col-lg-4">
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
        </div>
      </div>
    </div>
  </div>

  <h6>Funds: {{funds}}</h6>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex';
import {
  mapActions
} from 'vuex';
import Stock from './Stock.vue'
export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters([
      'portfolioStocks',
      'funds'
    ])
  }
}
</script>
