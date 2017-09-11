import Vue from 'vue'
//import jQuery from 'expose?$!expose?jQuery!jquery'
import VueResource from 'vue-resource'
import App from './App.vue'

//Vue.use(jQuery)
Vue.use(VueResource)
// Can store request URL globally and provide an empty string OR append to the end on the VUE ajax calls where you would normally pass the full url
//Vue.http.options.root = "https://vuexhr.firebaseio.com/data.json"

new Vue({
  el: '#app',
  render: h => h(App)
})
