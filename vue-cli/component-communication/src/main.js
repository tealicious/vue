import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();
// eventBuss can pass data between child vue components
// must be exported before the vue instance is created

new Vue({
  el: '#app',
  render: h => h(App)
})
