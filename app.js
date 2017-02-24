new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: '//google.com',
    finishedLink: '<a href="//google.com" target="_blank">Google</a>',
    counter: 0,
    counter2:0,
    counter3:0,
    result: '',
    x:       0,
    y:       0,
    name: 'Max'
  },
  computed: {
    output: function() {
      console.log('computed');
      return this.counter2 > 5 ? 'more than 5' : 'less than 5';
    }
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
      this.counter += step;
      this.result = this.counter > 10 ? 'more than 10' : 'smaller than 10';
    },
    decreaseCount: function(step, e) {
      this.counter -= step;
      this.result = this.counter > 10 ? 'more than 10' : 'smaller than 10';
    },
    counterResult: function() {
      return this.counter2 > 5 ? 'more than 5' : 'less than 5';
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
