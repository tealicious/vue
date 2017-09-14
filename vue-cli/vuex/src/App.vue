<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-result-two></app-result-two>
                <hr>
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import ResultTwo from './components/ResultTwo.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appResultTwo: ResultTwo
        }
    }
</script>
