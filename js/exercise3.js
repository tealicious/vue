// without explicitly stating this, the object of this lesson was to illustrate the relational chain between a computed method and the watch command. When watch() changes our value to 0, output(), which is also tied to any changes on the data object 'value', returns the else statement (since 0 != 37)

new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result:'not there yet'
        },
        computed: {
          //WARNING: computed object names should not be represented as functions with parenthesis when being reference in the dom, they are instead referenced like a simple data object
          output: function() {
            console.log('computed');
            return this.value == 37 ? 'ya boy!' : 'keep going 37 is the answer!';
            // this is shorthand for the below if/else statement
            // if (this.value == 37) {
            //   return 'ya boy!'
            // } else {
            //   return 'keep going 37 is the answer!'
            // }
          }
        },
        watch: {
          value: function() {
            // REMEMBER: 'this' must be set as a variable in order to bring it's scope into local watch object methods
            var vm = this;
            if (vm.value == 37){
            setTimeout(function(){
              vm.value = 0;
            },5000)
          }
          }
        }
    });
