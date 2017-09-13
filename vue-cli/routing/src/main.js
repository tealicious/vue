import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history' //removes hash necessity on url route
                  // servers must be setup to return the index.html page automatically
                  // HTML5 history mode in the vue-router docs will show how a server needs setup1
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
