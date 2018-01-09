import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
axios.defaults.baseURL = "https://axios-tutorial.firebaseio.com";
// you can set up auth headers and shit this way too
// axios.interceptors.request.use(config => {
//   console.log("request interceptor");
//   return config;
// })
// axios.interceptors.response.use(response => {
//   console.log("response interceptor");
//   return response;
// })
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})