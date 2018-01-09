<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | reverseMe}}</p>
                <p> {{ text2 | appendNumChar}} </p>
                <p>{{ computedReverseMe }}</p>
                <p>{{ computedAppendNumChar }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {computedMixin} from './computedMixin';
export default {
    filters: {
            reverseMe(value){
              return value.split("").reverse().join("");
            }
    },
    mixins: [computedMixin]
}
</script>

<style>
</style>
