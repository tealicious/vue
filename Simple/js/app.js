new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: '//google.com',
    linkTitle: 'Google.com',
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
  watch: {
    // watching the counter variable for change then performing a function (in this case a timeout)
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000)
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
    },
    changeLink: function() {
      if (this.link == '//google.com') {
        this.link = '//apple.com';
        this.linkTitle = 'Apple.com';
      } else {
        this.link = '//google.com';
        this.linkTitle = 'Google.com';
      }
    }
  }
});
