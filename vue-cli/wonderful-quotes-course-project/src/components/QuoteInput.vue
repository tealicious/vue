<template>
  <div class='row'>
    <form v-on:submit.prevent="pushQuote">
      <div class='col-sm-8 col-sm-offset-12 col-xs-12 col-md-6 col-md-offset-3 form-group'>
        <label>Quote</label>
        <textarea class='form-control' rows='3' v-model="quote"></textarea>
        <button class='btn btn-primary' type='submit'>submit</button>
      </div>
    </form>
  </div>
</template>
<script>
  import {eventBus} from '../main';
  export default { 
    data: function() {
      return {
        quote: ''
      }
    },
    methods: {
     pushQuote() {
       eventBus.$emit('pushQuote', this.quote);
       this.quote='';
      }
    }
  }
</script>
<style>
</style>