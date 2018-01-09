<template>
  <div id="app">
    <vue-body></vue-body>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Body from './Body.vue'
export default {
  components: {
    'vue-footer': Footer,
    'vue-body': Body
  }
}
</script>

<style lang="scss">
body, html {
  height:100%;
  padding:0;
  //margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  //display:flex;
  //flex-flow:column nowrap;
  height:100%;
}
h1, h2, h3, h4, p {
  font-weight:normal;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform:uppercase;
}

.vue-shadow {
  -webkit-filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.5));
}
</style>
