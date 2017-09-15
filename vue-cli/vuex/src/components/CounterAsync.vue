<template>
<div>
  Async (wait
  <select v-model="selectedOption">
      <option v-for="option in options" :value="option">
        {{option}}
      </option>
  </select> second):
  <br />
  <br />
  <button class="btn btn-warning" @click="asyncDecrement({duration: payLoad})">-</button>
  <button class="btn btn-info" @click="asyncIncrement({duration: payLoad})">+</button>
  <button class="btn btn-danger" @click="asyncClear({duration: payLoad})">Clear</button>
  <button class="btn btn-primary" @click="makeItOneThousand">add 1000!</button>
  <button class="btn btn-primary" @click="takeAwayOneThousand">remove 1000!</button>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
import {
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      options: [1, 5, 10],
      selectedOption: 1 // <--- going to be used for my payload
    }
  },
  computed: {
    payLoad() {
      return this.selectedOption * 1000; //<--- PAYLOAD
    }
  },
  methods: {
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement',
      'asyncClear'
    ]),
    ...mapMutations([
      'clear'
    ]),
    makeItOneThousand() {
      setTimeout(() => {
        this.$store.state.counter += 1000;
        this.$store.state.clicks++;
      }, this.payLoad)
    },
    takeAwayOneThousand() {
      setTimeout(() => {
        this.$store.state.counter -= 1000;
        this.$store.state.clicks++;
      }, this.payLoad)
    }
  }
}
</script>
