// data CAN be imported from another variable

var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};


var vm3 = new Vue({
  //we can create custom element names to mount our app to, but cannot repeat them in the dom to easily replicate an app
  el:'#app3',
  template:'<h1>hello</h1>'
});

//to do this, we can create a component
//this component element must go inside of a mounted vue instance element in the dom, it must also be created before the vue instance it is to be replicated in, in the dom we create three <hello> elments in the #app2 instance to show this
Vue.component('hello', {
  template:'<h1>hello</h1>'
});

//vm3.$mount('#app3');
// same as
//vm3.$mount();
//document.getElementById('app3').appendChild(vm3.$el);


var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'noice!';
      console.log(this.$refs.myButton)
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  }
  // watch: {
  //   title: function(value) {
  //     alert('Title changed, new value: ' + value);
  //   }
  // }
});

//we can mount our app to a place in the dom like this instead of the 'el' property
vm1.$mount('#app1');

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "nice nice very nice";

// setTimeout(function(){
//   vm1.title = 'Changed by timer';
//   vm1.show();
// }, 3000);

var vm2 = new Vue({
  el: '#app2',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
      },
      updateTitle: function(title) {
        this.title = ('The VueJS Instance (Updated)');
      },
      onChange: function() {
        vm2.title = 'Changed';
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    }
    // watch: {
    //   title: function(value) {
    //     alert('Title changed, new value: ' + value);
    //   }
    //}
});
