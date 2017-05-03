import Vue from 'vue'
import App from './App.vue'

//create eventBus to share components between sibling components
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
