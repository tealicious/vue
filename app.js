new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: '//google.com',
    finishedLink: '<a href="//google.com" target="_blank">Google</a>',
    counter: 0,
    x:       0,
    y:       0
  },
  methods: {
    changeTitle: function(e) {
      this.title = e.target.value;
    },
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    },
    increaseCount: function(step, e) {
      this.counter+= step;
    },
    decreaseCount: function(step, e) {
      this.counter-= step;
    },
    updateCoordinates: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
     },
    // dummy: function() {
    //   e.stopPropagation();
    // }
    alertMe: function(e) {
      alert(e.target.value);
    }
  }
});
