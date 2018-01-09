<template>
<div>
  <p>Locally modified counter is: {{ counter }}</p>
  <p>Locally modified click count is: {{ clicks }}</p>
</div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter.counter;
    },
    clicks() {
      return this.$store.state.counter.clicks;
    }
  }
}
</script>
