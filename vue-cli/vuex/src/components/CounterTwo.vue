<template>
<div>
  <button class="btn btn-warning" @click="decrement">-</button>
  <button class="btn btn-info" @click="increment">+</button>
  <button class="btn btn-danger" @click="clear">Clear</button>
  <button class="btn btn-primary" @click="makeItOneThousand">add 1000!</button>
  <button class="btn btn-primary" @click="takeAwayOneThousand">remove 1000!</button>
</div>
</template>

<script>
// vuex provides a method that allows access to all mutation methods (things that globally change the state)
import {
  mapMutations
} from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
      'clear'
    ]),
    makeItOneThousand() {
      this.$store.state.counter.counter += 1000;
      this.$store.state.counter.clicks++;
    },
    takeAwayOneThousand() {
      this.$store.state.counter.counter -= 1000;
      this.$store.state.counter.clicks++;
    }
  }

  // fuck all these local method mutations!
  // {
  //   increment() {
  //     this.$store.commit('increment'); // find and execute the incrememtn mutation method in the store.js file
  //   },
  //   decrement() {
  //     this.$store.commit('decrement');
  //   },
  //   clear() {
  //     this.$store.commit('clear');
  //   }
  // }
}
</script>
