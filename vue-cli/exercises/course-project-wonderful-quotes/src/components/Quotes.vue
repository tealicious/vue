<template>
    <div class="flex-quotes">
        <appQuote v-for="(quote, i) in quotes" :key="i" :quote="quote" class="flex-quote panel">
        </appQuote>
    </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  }
};
</script>
<style>
.flex-quotes {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.flex-quote {
  margin: 1rem 3% 1rem 0;
  width: 30%;
  padding: 1rem 2rem;
  font-size: 3.5rem;
  cursor: pointer;
  font-family: "Arizonia", cursive;
}
</style>