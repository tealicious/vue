<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | capitalize }}</p>
                <p>{{ name | upperCase }}</p>
                <p>{{ name | lowerCase | capitalize }}</p>
                <div>
                    <input v-model="filterText"/>
                    <ul>
                        <li v-for="fruit in filteredFruits">{{fruit | capitalize}}</li>
                    </ul>
                </div>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from './fruitMixin';
    import List from './List.vue';
    export default {
      data: function() {
            return {
              text:'hello world!',
              name: 'someguy'
            }
        },
        filters: {
            capitalize(value) {
                if (!value) return ''
                value = value.toString()
                return value.replace(/\b\w/g, function(l){ return l.toUpperCase() });
            },
            upperCase(value) {
                return value.toUpperCase();
            }
        },
        mixins: [fruitMixin],
        components: {
            appList : List
        }
    }
</script>

<style>

</style>
