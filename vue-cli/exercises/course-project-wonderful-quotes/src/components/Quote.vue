<template>
    <div @click="deleteQuote">
        <p>{{quote}}</p>
    </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  props: ["quote"],
  methods: {
    deleteQuote() {
      eventBus.$emit("quoteDeleted", this.quote);
    }
  }
};
</script>