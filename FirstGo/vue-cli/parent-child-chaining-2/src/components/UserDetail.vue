<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{myName}}</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click='resetFn()'>Toggle Name</button>
        <!-- here we are passing a reset name function to the child template and referencing it as a callback. by referencing the resetFn prop below, we are calling the function from the parent template -->
        <button @click="editAge">Reset Age</button>
        <!-- here we are passing the useAge prop to both child templates and then creating functions in both templates that can emit their reults into the parent component, changing the userAge prop for any component that has it -->
    </div>
</template>

<script>
// this eventBus is being imported from the main.js file where we create our vue instance
import { eventBus } from '../main';

  export default {
    // data: function() {
    //   return {
    //     counter: myCounter
    //   };
    // },
    // props: ['myName'],
    // props tells a component that a piece of data will be coming from and be able to be manipulated by a different, outside component. Give the parent element a v-bound attribute to set this prop there to be passed down
    // props: {
    //   'myName': [String, Array]
    // },
    // validation can be placed on a property by storing it in an object instead of an array and passing in what type of data this property can be allowed to be. by doing this, if incorrect data is passed to the prop, it will prevent the entire view from breaking its render
    props: {
      'myName': {
        type: String,
        //required: true,
        default: 'Max'
      },
      resetFn: Function,
      // this will override the child resetName function with the function passed down from the parent vue template
      userAge: Number
      //passing the age prop to this child component
    },
    // by passing our validation rules into an object instead of an array we can create even further validations by telling vue whether the data is required to be passed or not, or by simply providing a default data object that will be inserted if there isn't one passed. default data objects cannot be manipulated or 2 way bound
    // props: {
    //   'myName': {
    //     type: Object,
    //     //required: true,
    //     default: function() {
    //       return {
    //         name: 'Max'
    //       }
    //     }
    //   }
    // },
    // a data type, object would need to be returned via a return function
    methods: {
      switchName(){
          return this.myName.split("").reverse("").join("");
          // reverse name to show that passed props can be manipulated from within the child component
      },
      // resetName() {
      //   this.myCounter++;
      //   if (this.myCounter % 2 == 0){
      //     this.myName = 'Anna';
      //   } else {
      //     this.myName = 'Max';
      //   }
      //   this.$emit('nameWasReset', this.myName, this.myCounter)
      //   // how do i get the name from the parent comnponent to the child so that it can bee accessed and changed???
      // }
    editAge() {
      this.userAge = 27;
      eventBus.$emit('ageWasEdited', this.userAge);
      // here we are emiting directly to the eventBus, where any componwhich imports the bus can get access to the emitted
    }
    },
    created() {
      // createing a listener for any changes made to the user age
      // 'age' just a designation for the data being passed
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
