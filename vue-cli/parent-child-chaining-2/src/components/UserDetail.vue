<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{myName}}</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click='resetName'>Toggle Name</button>
    </div>
</template>

<script>
  export default {
    data: function() {
      return {
        counter: counter
      };
    },
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
      }
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
      resetName() {
        this.counter++;
        if (this.counter % 2 == 0){
          this.myName = 'Anna';
        } else {
          this.myName = 'Max';
        }
        this.$emit('nameWasReset', this.myName, this.counter)
        // how do i get the name from the parent comnponent to the child so that it can bee accessed and changed???
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
