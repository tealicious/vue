new Vue({
  el: '#app',
  data: {
    counter:0,
    secondCounter:0,
    result: 'not clicked yet',
    secondResult: 'not clicked yet'
  },
  computed: {
    output: function(){
      console.log('computed');
      return this.secondResult = this.secondCounter > 5 ? 'second counter Greater than 5' : 'second counter Smaller than 5';
    }
  },
  watch: {
    //the object name is the variable we want to watch
    counter: function(value) {
      //inside the watch object, 'this' must be brought into local scope by assigning it to a variable
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    increase: function() {
      this.counter++;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
      // the above is shorthand for the same if else statement stated here
      // if (this.counter > 5) {
      //   this.result = 'greater than 5'
      // } else {
      //   this.result = 'smaller than 5'
      // }
    },
    decrease: function() {
      this.counter--;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    clickResult: function() {
      // if (this.counter > 5) {
      //   result = 'greater than 5'
      // } else {
      //   result = 'smaller than or equal to 5'
      // }
      // return result;
      console.log('method');
      return this.counter > 5 ? ' first counter Greater than 5' : ' first counter Smaller than 5';
    }
  }
});
