import Vue from 'vue'
import App from './App.vue'

//snag the store
import { store } from './store/store';

new Vue({
  el: '#app',
  store, // tell the vue instance about it
  render: h => h(App)
})
