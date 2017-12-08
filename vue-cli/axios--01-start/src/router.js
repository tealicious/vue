//ROUTER GUARDS

import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import store from './store' //import our store in order to check for idToken
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: WelcomePage
  },
  {
    path: '/signup',
    component: SignupPage
  },
  {
    path: '/signin',
    component: SigninPage
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter(to, from, next) {
      if (store.state.idToken) { // is there an idToken currently?
        next(); //yes, allow through      
      } else {
        next('signin'); // no, redirect to sign in page
      }
    }
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})