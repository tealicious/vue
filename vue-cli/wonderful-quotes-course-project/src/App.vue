<template>
    <div class="container">
        <quote-input></quote-input>
        <quote-grid :quotes="quotes"></quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import QuoteInput from './components/QuoteInput.vue';
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
            quoteInput: QuoteInput
        },
        created() {
            eventBus.$on('pushQuote', (quote) => {
                this.quotes.push(quote);
            });
        }
    }
</script>

<style>
</style>
