import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue'

Vue.component("app-user", User)

export const eventBus = new Vue({
  changeAge() {
    this.$emit('ageWasEdited')
  }
}); //eventBus

new Vue({
  el: '#app',
  render: h => h(App)
})
