import Vue from 'vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import App from './App.vue'


Vue.use(VuePaginate)
Vue.use(VueResource)
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
