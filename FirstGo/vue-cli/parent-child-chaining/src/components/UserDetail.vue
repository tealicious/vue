<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ passedName }}</p>
        <p>User Name: {{ switchName() }}</p>
        <!-- ^ using the propped name in a method held by the child template -->
    </div>
</template>

<script>
export default {
  //props: ['passedName'],
  props: {
    passedName: [String, Array]
    // place props in an object to create validation (so that passing an incorrect data type doesn't prevent the rest of the instance from rendering)
  },
  // we are saying the property 'passedName' can be changed from outside the template
  // props name must match name used in template
  methods: {
    switchName() {
      return this.passedName.split("").reverse().join("");
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
