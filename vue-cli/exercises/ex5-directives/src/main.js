import Vue from 'vue'
import App from './App.vue'

Vue.directive('pulse', {
  bind(el, binding, vnode) {
    var delay = 700;
    el.style.transition = "transform .7s ease-in-out";

    function scale() {
      el.style.transform == 'scale(1)' ? el.style.transform = `scale(${binding.value})` : el.style.transform = 'scale(1)';
    }

    let pulse = setInterval(scale, delay)

    el.addEventListener('mouseenter', function () {
      clearInterval(pulse);
      setInterval(scale, delay);
    })
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})