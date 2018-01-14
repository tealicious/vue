<template>
    <div class="form-group">
        <form>
            <div class="form-group">
                <label for="textarea">New Quote</label>
                <textarea v-model="quote" id="textarea" class="form-control" rows="5"></textarea>
            </div>
            <button class="btn btn-default btn-info" @click.prevent="addQuote">Add Quote</button>
        </form>
    </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      quote: null,
      quotes: []
    };
  },
  methods: {
    addQuote() {
      if (this.quotes.length >= 10) {
        alert("Gotta delete a quote!");
        return;
      }
      if (this.quote != null && this.quote.length > 1) {
        this.quotes.unshift(this.quote);
        eventBus.$emit("quoteAdded", this.quotes);
        this.quote = null;
      } else {
        alert("You gotta enter something!");
      }
    }
  }
};
</script>