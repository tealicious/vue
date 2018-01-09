//components are reusable vue items with 2 parameters, the name of the new vue-element that will hosue the component, and a vue object


// Vue.component('my-cmp', {});  <--- global registration of component
var cmp = { // <---- component stored into variable for imported local use later
  // it's important to return data via a function, this allows for it to be cloned and accessed individually if the vue component is repeated
  data: function() {
    return {
      status: 'Critical'
    };
  },
  //templates must be wrapped in a single element/cannot be split between elements
  template: '<div><p>Server Status: {{ status }} </p><br/><button @click="changeStatus">Change</button></div>',
  methods: {
  //because we return the 'status' data via  a function, it is stored twice and can be accessed via this function seperately in the DOM (click the change button to see result)
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
}

//once registered, components exist in the global Vue scope and can be used by any folling vue instance


// Vue.component('my-cmp', {});  <--- global registration of component
// ^ components can be stored in a variable and imported from the global scop into a vue instance
new Vue({
  el:'#app',
  components: {
    'my-cmp': cmp
  }
});


//since components are global, we can pair it to this Vue instance as well
new Vue({
  el:'#app2',
  components: {
    'your-cmp': cmp
  }
  // ^ here we've imported the same component and given it a different element name to render into
});
