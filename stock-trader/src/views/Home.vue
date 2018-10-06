<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <h2 class="mt-3"><strong>Funds: {{funds | currency}}</strong></h2>
    <h2 class="mt-3"><strong>Portfolio: {{portfolioValue | currency}}</strong></h2>
    <h2 class="mt-3"><strong>Total: {{totalWorth | currency}}</strong></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Home"
    };
  }
};
</script>
<style scoped lang="scss">
</style>
