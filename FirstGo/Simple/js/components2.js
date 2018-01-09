//vue instances cannot simply be repeated by accessing multiple classes
//to repeat parts of an instance we use components

//vue components can be written multiple ways, here is an example of a component object.
//It takes two parameters, the name of the component element to be used in the dom and then a VueJS object
Vue.component('my-cmp', {
  //component objects have a catch, and that is that their data objects cannot be simply stored, but must be returned via a function
  //data: {
  //  status: 'Critical' // this simple declaration will not work
  //},
  data: function() {
    return {
      status: 'Critical' // this will
      // returning our data allows us to store it as many times in memory as components we create on the DOM, this way functionality does not bleed into every creplicated component
    }
  },
  template: '<div><p>Server Status: {{ status }} </p><hr/><button @click="changeStatus">Change</button></div>',
  //^ always wrap templates in a single parent/root element
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
});
//^ this component has global scope and our vue instance (and any other vue instances we create) can now reference it. It does not even need to be referenced in the Vue instance in the javascript file, but can be created on the DOM now with the special element name we decided upon


//component objects can also be stored in a variable and accessed later with local scope from a vue instance
var cmp = {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<div><p>Server Status: {{ status }} </p><hr/><button @click="changeStatus">Change</button></div>',
  methods: {
    changeStatus: function() {
      this.status = 'Crunchy';
    }
  }
};

new Vue({
  el:'#app'
});

new Vue({
  el:'#app2',
  components: {
    'my-local-cmp': cmp
  //^ register with new element selector to be used on DOM
  //followed by the variable name we stored the component object in
  }
});
