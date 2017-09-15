<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Vuex</h1>
      <app-result></app-result>
      <app-result-two></app-result-two>
      <hr>
      <app-counter></app-counter>
      <br />
      <app-counter-two></app-counter-two>
      <br />
      <app-counter-async></app-counter-async>
    </div>
  </div>
</div>
</template>

<script>
import Counter from './components/Counter.vue';
import CounterTwo from './components/CounterTwo.vue';
import CounterAsync from './components/CounterAsync.vue';
import Result from './components/Result.vue';
import ResultTwo from './components/ResultTwo.vue';

export default {
  components: {
    appCounter: Counter,
    appCounterTwo: CounterTwo,
    appCounterAsync: CounterAsync,
    appResult: Result,
    appResultTwo: ResultTwo
  }
}
</script>
