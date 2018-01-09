<template>
  <div id="body">
    <div class='center-content' @click="scrollToBottom()">
      <img class='vue-shadow' src="./assets/logo.png">
    </div>
    <br />
    <h2>chaining through parent</h2>
    <div v-for="server in 2">
      <server-status
      :serverStatus='status'
      @serverDetailChanged="status = $event"
      ></server-status>
      <br />
    </div>
    <h2>eventbus</h2>
    <div v-for="server in 2">
      <server-bus></server-bus>
      <br />
    </div>
  </div>
</template>

<script>
import Server from './Server.vue'
import Serverbus from './ServerBus.vue'
export default {
  data: function() {
    return {
      status : 'Critical',
      statusToggle: false
    };
  },
  props: ['serverStatus'],
  methods: {
    scrollToBottom() {
      $("html, body").animate({ scrollTop: $("#footer").offset().top }, "fast");
      return false;
    }
  },
  components: {
    'server-status': Server,
    'server-bus': Serverbus
  }
}
</script>

<style lang="scss">
#body {
  //flex-grow:1;
  display:flex;
  flex-flow:column wrap;
  justify-content:flex-start;
  //align-items:center;
  width:100%;
  min-height:100vh;
  .center-content {
    margin-top:4rem;
    img {
      cursor:pointer;
      width:100px;
    }
  }

  > div {
    width:100%;
  }
}
</style>
