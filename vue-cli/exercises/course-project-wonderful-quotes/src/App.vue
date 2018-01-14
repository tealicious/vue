<template>
    <div class="container">
        <appProgress :quotesLength="quotes.length"></appProgress>
        <appForm></appForm>
        <appQuotes :quotes="quotes"></appQuotes>
        <hr>
        <appFooter>
            <p style="text-align:center;">Info: Click a quote to delete it</p>
        </appFooter>
    </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Form from "./components/Form.vue";
import Progress from "./components/Progress.vue";
import Quotes from "./components/Quotes.vue";
import { eventBus } from "./main";
export default {
  data() {
    return {
      quotes: []
    };
  },
  components: {
    appFooter: Footer,
    appForm: Form,
    appProgress: Progress,
    appQuotes: Quotes
  },
  created() {
    eventBus.$on("quoteAdded", newQuote => {
      this.quotes = newQuote;
    });
    eventBus.$on("quoteDeleted", deleteQuote => {
      const index = this.quotes.indexOf(deleteQuote);
      this.quotes.splice(index, 1);
    });
  }
};
</script>

<style>

</style>
