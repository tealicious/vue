import Vue from 'vue'
import App from './App.vue'

import Server from './atoms/Server.vue'
import Title from './molecules/Title.vue'
import Footer from './molecules/Footer.vue'
import ServerStatus from './molecules/ServerStatus.vue'
import ServerDetails from './molecules/ServerDetails.vue'
import Servers from './snippets/Servers.vue'

Vue.component("app-title", Title)
Vue.component("app-footer", Footer)
Vue.component("app-server", Server)
Vue.component("app-server-status", ServerStatus)
Vue.component("app-server-details", ServerDetails)
Vue.component("app-servers", Servers)

new Vue({
  el: '#app',
  render: h => h(App)
})