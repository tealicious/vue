<!-- 4. -->
<template>
  <!--DONT FORGET TO WRAP THIS TEMPLATED COMPONENT IN A SINGLE ROOT/PARENT ELEMENT -->
  <div>
      <h1>{{someyunguy}}</h1>
      <hr />
      <button @click='changeStatus'>Change Status</button>
  </div>
</template>

<script>
    export default {
      data: function(){
        return {
          //like a component data object, this exported data object must be returned from within a function
          someyunguy: 'cream of'
        }
      },
      methods: {
        changeStatus() {
          this.someyunguy = 'cream of mushroom soup';
        }
      }
    }
</script>

<style>

</style>
