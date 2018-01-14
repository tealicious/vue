<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!-- slots can be given specificity -->
          <h2 slot="title">{{quoteTitle}}</h2>
          <!-- unassigned content gets placed into the unnamed slot -->
          <p>{{quote}}</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
export default {
  data() {
    return {
      quoteTitle: "The Quote",
      quote: "A wonderful quote!"
    };
  },
  components: {
    appQuote: Quote
  }
};
</script>

<style scoped>
/* scoped styles get passed down into child slots */
h2 {
  color: red;
}
</style>
