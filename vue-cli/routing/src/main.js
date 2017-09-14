import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history', //removes hash necessity on url route
                   // servers must be setup to return the index.html page automatically
                   // HTML5 history mode in the vue-router docs will show how a server needs setup
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // if the user uses the back button, place them where they were
    }
    if (to.hash) { //vue-router must be explicitly told to allow ID navigation
      return { selector: to.hash };
    }
    // return {x: 0, y: 0};
  }
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next(); // explicitly tell beforeEach method to allow route actions to continues
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
