<template>
<p>Local counter is: {{ counter }}</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    clicks() {
      return this.$store.state.clicks;
    }
  }
}
</script>
