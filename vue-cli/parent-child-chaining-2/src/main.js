import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();
//an event eventBus can be used to pass data directly between vue components, whether parent-child, sibling-sibling, parent-ancestoretc....
//eventBuses are set up in the file where the vue instance is began and must be 'imported' at the start of vue component scripts
// the eventBus must be created before the vue instance using it

new Vue({
  el: '#app',
  render: h => h(App)
})
