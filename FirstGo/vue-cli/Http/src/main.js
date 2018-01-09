import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

// Can store request URL globally and provide an empty string OR append to the end on the VUE ajax calls where you would normally pass the full url
Vue.http.options.root = "https://vuexhr.firebaseio.com/"

//intercept and manipulate XHR's
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if(request.method == 'POST'){
//     //change post method to put (overwrite data there)
//     request.method = 'PUT';
//   }
//   next(response => {
//     //create an object to console log the response body to (during GET request)
//     response.json = () => { return {messages: response.body} }
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
