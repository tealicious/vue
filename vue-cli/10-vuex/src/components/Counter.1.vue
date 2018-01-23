<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="delayedIncrement({by:100, duration:500})">Delayed Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="delayedDecrement({by:100, duration:500})">Delayed Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    delayedIncrement(payloadObject) {
      this.$store.dispatch("delayedIncrement", payloadObject);
    },
    delayedDecrement(payloadObject) {
      this.$store.dispatch("delayedDecrement", payloadObject);
    }
  }
};
</script>