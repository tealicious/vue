import Vue from 'vue'
import App from './App.vue'
import Home from './4_layouts/Home.vue'
import './js/filters.js';

Vue.component('app-servers', Home)


new Vue({
  el: '#app',
  render: h => h(App) // render replaces 'template:' and 'App' replaces template string
})

// alternative way to load
// const vm = new Vue({
//   ...App
// });

// vm.$mount('#app');
