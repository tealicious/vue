new Vue({
  el: '#app',
  data: {
    colorToggle  : false,
    color        : 'green',
    inlineColor  : 'white',
    width        : 22
  },
  computed: {
    divClassRed: function() {
      return {
        red: this.colorToggle
      };
    },
    divClassBlue: function() {
      return {
        blue: this.colorToggle
      };
    },
    divClassGreen: function() {
      return {
        green: this.colorToggle
      };
    },
    myColorStyle: function() {
      return {
        backgroundColor: this.inlineColor
      };
    },
    myWidthStyle: function() {
      return {
        width: this.width + 'vmin'
      };
    }
  }
});
