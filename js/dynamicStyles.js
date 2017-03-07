new Vue({
  el: '#app',
  data: {
    attachRed  : false,
    attachBlue : false,
    attachGreen: false,
    color   : 'green',
    color2  : 'slategray',
    width   : 22
  },
  computed: {
    divClassesRed: function() {
      return{
        red : this.attachRed,
        blue: !this.attachRed
        //when attachRed is false, or there is no 'red' class on the div, then it defaults to blue class
      };
    },
    divClassesBlue: function() {
      return{
        blue: this.attachBlue
      };
    },
    divClassesGreen: function() {
      return{
        green: this.attachGreen
      };
    },
    //////////////////////////////////
    //////////////////classless styles
    myStyle: function() {
      return {
        backgroundColor: this.color2,
        width: this.width + 'vmin'
      };
    }
  }
});
