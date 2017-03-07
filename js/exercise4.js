new Vue({
  el: '#exercise',
  data: {
    attachShrink    : false,
    attachHighlight : false
  },
  methods: {
    startEffect: function() {
        return {
          shrink: this.attachShrink,
          highlight: !this.attachShrink
        };
        setInterval(function(){
          this.attachShrink
        }, 3000);
        setInterval(function(){
          !this.attachShrink
        }, 1500);
    }
  }
});
