new Vue({
  el:'#app',
  data: {
    title: 'The VueJS Instance'
  },
  // all registered on the root and do not go in 'methods' object
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beofreMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroy: function() {
    console.log('destroy()');
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
});
