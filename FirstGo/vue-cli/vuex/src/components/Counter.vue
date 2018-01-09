<template>
<div>
  <button class="btn btn-warning" @click="decrement">-</button>
  <button class="btn btn-info" @click="increment">+</button>
  <button class="btn btn-danger" @click="clear">Clear</button>
</div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter.counter++;
      this.$store.state.counter.clicks++;
    },
    decrement() {
      this.$store.state.counter.counter--;
      this.$store.state.counter.clicks++;
    },
    clear() {
      this.$store.state.counter.counter = 0;
      this.$store.state.counter.clicks = 0;
    }
  }
}
</script>
