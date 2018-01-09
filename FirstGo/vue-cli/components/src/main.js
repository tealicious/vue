import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
// ^ tell webpack where our views are

Vue.component('app-servers', Home);
// ^ register component created on home.vue
// Home imports and pulls from the component in ServerStatus

new Vue({
  el: '#app',
  render: h => h(App)
  // ^ calls to the 'export default' object in the App.vue file, this is essentially rendering a component object
})
