<template>
    <div class="container">

      <vue-header></vue-header>

      <hr>

      <vue-content></vue-content>

      <hr>

      <vue-footer></vue-footer>

    </div>
</template>

<script>
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'
import Content from './server/Content.vue'
export default {
  components: {
    'vue-header'   : Header,
    'vue-footer'   : Footer,
    'vue-content'  : Content
  }
}
</script>

<style>

</style>
