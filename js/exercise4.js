new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight : false,
      shrink    : true
    },
    happyP      :'Now I have classes!',
    color       :'',
    // 'color' the data paird to color will be represented later on the v-bind:class name
    margins     :'margins',
    //attaching the 'margins'data object to the class name 'margins'
    visible     : true,
    myStyles: {
      width: 100,
      height: 300,
      backgroundColor: 'rgb(33,150,243)',
      opacity: 1
    }
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
  },
  computed: {
    myStylesComputed: function(){
      return {
        width: this.myStyles.width + '%',
        height: this.myStyles.height + 'px',
        opacity: this.myStyles.opacity
      };
    }
  }
});
