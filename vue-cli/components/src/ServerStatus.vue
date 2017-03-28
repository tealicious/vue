<template>
  <div> <!-- must wrap a template in a single root element -->
    <p>
      Server Status: {{ status }}
    </p>
    <hr />
    <button @click='changeStatus' class='btn-primary'>Change Status</button>
  </div>
</template>

<script>
//mirrors the behavior of a component object
//to be exported into a for-loop template (home) and exported from there into the main.js
export default {
  data: function() {
      //like inside of a component, data objects must be returned from the inside of a function
      //status: 'Critical'
      return {
        // data objects start after the return statement
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal';
      }
    }
  }
</script>

<style lang="css">
</style>
