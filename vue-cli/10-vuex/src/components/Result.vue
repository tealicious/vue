<template>
  <p>Counter is: {{ singleCounter }}</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter.counter;
      //state is weird and needs the module name appended to a getter from import
    },
    singleCounter() {
      return this.$store.getters.singleCounter;
    }
  }
};
</script>