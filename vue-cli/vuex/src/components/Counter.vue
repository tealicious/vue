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
      this.$store.state.counter++;
      this.$store.state.clicks++;
    },
    decrement() {
      this.$store.state.counter--;
      this.$store.state.clicks++;
    },
    clear() {
      this.$store.state.counter = 0;
      this.$store.state.clicks = 0;
    }
  }
}
</script>
