<template>
  <div id="server">
    <p>Server Status: {{ serverStatus }}</p>
    <button @click="toggleStatus()">Change</button>
  </div>
</template>

<script>
import { eventBus } from './main';
export default {
  data: function() {
    return {
      status : 'Critical',
      statusToggle: false
    };
  },
  props: {serverStatus: String},
  methods: {
    toggleStatus() {
      this.statusToggle = !this.statusToggle;
      if(this.statusToggle){
        this.serverStatus = 'Normal'
      } else {
        this.serverStatus = 'Critical'
      }
      //this.$emit('serverDetailChanged', this.serverStatus)
      eventBus.$emit('serverDetailChanged', this.serverStatus)
    }
  },
  created() {
    eventBus.$on('serverDetailChanged', (status) => {
      this.serverStatus = status;
    });
  }
}
</script>

<style lang="scss">
#server {
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-around;
  align-items:center;
  width:100%;
  button {
    order:-1;
  }
}
</style>
