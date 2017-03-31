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
      props:{
        //myName: [String, Array]
        // if we pass a property into an object, we can create validation, the array paired to the key can be used to force the accepted data type
        myName: {
          type:String,
          //required: true
          default: 'tea'
        }
        // alternatively, we can skip the error log with a required object key. if incorrect data is paired to the myName object, the template depending on it simply won't renderr
        // a defualt key can be used to set the defualt string paired to the template so that in the case one is not provided, the template can render with the defaulted string. for the defualt to be two way bound, it muyst be returned from within  function just like any other data object
      },
      //^ If a parent vue file has properties we want to use in the child component, we have to assign that parent's data property in the component object to 'props' in order to access it

      // 'myName' is actually accessing the 'name' data object from the parent view
      methods: {
        switchName() {
          return this.myName.split("").reverse().join("");
        },
        resetName() {
          this.myName = 'Tea';
        }
      }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
