import Vue from 'vue'
import App from './App.vue'

Vue.filter('appendNumChar', function(value) {
  var length = value.length.toString();
  var newString = value + " (" + length + ")";
  return newString;
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
