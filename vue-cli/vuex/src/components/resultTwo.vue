<template>
<div>
  <p>Stored Single Counter is: {{ singleCounter }}</p>
  <p>Stored Double Counter is: {{ doubleCounter }}</p>
  <p>Stored Triple Counter is: {{ tripleCounter }}</p>
  <p>Local Quadrupal Counter is: {{ quadrupalCounter }}</p>
  <p>{{ stringCounter }}</p>

</div>
</template>

<script>
// vuex provides a method that allows access to all methods on a stored computed property state (representation of uniquely changed state)
import {
  mapGetters
} from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'singleCounter',
      'doubleCounter',
      'tripleCounter',
      'stringCounter'
    ]),
    quadrupalCounter() {
      return this.$store.state.counter.counter * 4;
    }
  }

  // you can also pass an object here to rename the getter methods
  // IE: computed: mapGetters({
  //   timesOne: 'singleCounter',
  //   timesTwo: 'doubleCounter',
  //   timesThree: 'tripleCounter',
  //   addString: 'stringCounter'})

  // fuck all these computed methods!
  //{
  // counter() {
  //   return this.$store.getters.doubleCounter;
  // },
  // tripleCounter() {
  //   return this.$store.getters.tripleCounter;
  // },
  // stringCounter() {
  //   return this.$store.getters.stringCounter;
  // }
  //}
}
</script>
