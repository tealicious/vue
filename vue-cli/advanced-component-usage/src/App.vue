<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <quote></quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
        data: function() {
            return {
                airquote : "A wonderful quote"
            }
        },
        components: {
            quote : Quote
        }
    }
</script>

<style>
</style>
