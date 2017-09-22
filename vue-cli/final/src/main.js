import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

// local mixin
// import { mixin as onClickOutside } from 'vue-on-click-outside'
// const clickMixin = {
//   mixins: [onClickOutside]
// }
// export default clickMixin

import {
  routes
} from './routes';
import store from './store/store';

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})
const router = new VueRouter({
  mode: 'history', //no hashes
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
