<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-result-double></app-result-double>
                <hr>
                <app-counter></app-counter>
                <app-counter-commit-dispatch></app-counter-commit-dispatch>
                <hr>
                <app-v-model></app-v-model>
            </div>
        </div>
    </div>
</template>

<script>
import CounterSpread from "./components/Counter.vue";
import CounterCommit from "./components/Counter.1.vue";
import Result from "./components/Result.vue";
import ResultDouble from "./components/Result.1.vue";
import Vmodel from "./components/Vmodel.vue";
export default {
  components: {
    appCounter: CounterSpread,
    appCounterCommitDispatch: CounterCommit,
    appResult: Result,
    appResultDouble: ResultDouble,
    appVModel: Vmodel
  }
};
</script>

