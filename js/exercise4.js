new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight : false,
      shrink    : true
    },
    happyP      :'Now I have classes!',
    color       :'' 
  },
  methods: {
    startEffect: function() {
      var vm = this;
      vm.effectClasses.highlight  = !vm.effectClasses.highlight;
      vm.effectClasses.shrink     = !vm.effectClasses.shrink;
      setInterval(function() {
        vm.effectClasses.highlight  = !vm.effectClasses.highlight;
        vm.effectClasses.shrink     = !vm.effectClasses.shrink;
      }, 1500)
    },
    startProgress: function() {
    }
  }
});
