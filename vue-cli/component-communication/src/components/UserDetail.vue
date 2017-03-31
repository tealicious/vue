<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>True Name (as given by the dark lord): {{ switchName() }}</p>
    </div>
</template>

<script>
  export default {
      props:['myName'],
      //^ If a parent vue file has properties we want to use in the child component, we have to assign that parent's data property in the component object to 'props' in order to access it

      // 'myName' is actually accessing the 'name' data object from the parent view
      methods: {
        switchName() {
          return this.myName.split("").reverse().join("");
        }
      }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
