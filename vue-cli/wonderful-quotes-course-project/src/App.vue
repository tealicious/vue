<template>
    <div class="container">
        <quote-header
        :quoteCount="quotes.length"
        :maxQuotes="maxQuotes"></quote-header>
        <quote-input></quote-input>
        <quote-grid :quotes="quotes"></quote-grid>
        <div class='row'>
            <div class='col-sm-12 text-center'>
                <div class='alert alert-info'>
                    Info: Click on a quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import QuoteInput from './components/QuoteInput.vue';
    import Header from './components/Header.vue';
    import {eventBus} from './main';
    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotes: [
                'Blow up the damn ship, Picard!',
                'Revenge is a dish best served cold'
                ],
            }
        },
        components: {
            quoteGrid: QuoteGrid,
            quoteInput: QuoteInput,
            quoteHeader: Header
        },
        created() {
            eventBus.$on('pushQuote', (quote) => {
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Please delete Quotes first!');
                }
                this.quotes.push(quote);
            });
            eventBus.$on('deleteQuote', (index) => {
                this.quotes.splice(index, 1);
            });
        }
    }
</script>

<style>
</style>
