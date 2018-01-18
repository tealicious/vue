import Vue from 'vue'
import App from './App.vue'

//global directive
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el references the element that the custom directive is placed on
    var delay = 0;
    if (binding.modifiers['delayed']) {
      // modifiers are attached to the end of the custom v-directive with dot notation (v-highlight.delayed)
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        // args are passed by adding a colon after your custom v-directive (v-highlight:background="value")
        el.style.backgroundColor = binding.value;
        // value is what is passed to the directive (v-highlight="value")
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

// Vue.directive('highlight', {
//   bind(el, binding, vnode) {
//     var delay = 0;
//     if (binding.modifiers['delayed']) {
//       delay = 3000
//     }
//     setTimeout(() => {
//       if (binding.arg == 'background') {
//         el.style.backgroundColor = binding.value;
//       } else {
//         el.style.color = binding.value;
//       }
//     }, delay);
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App)
})