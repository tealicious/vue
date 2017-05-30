<template>
  <div id="serverBus">
    <div>
      <p>Server Status: {{ status }}</p>
      <button @click="toggleStatusBus()">Change</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main';
export default {
  data: function() {
    return {
      status : 'Critical',
      statusToggleBus: false
    };
  },
  methods: {
    toggleStatusBus() {
      this.statusToggleBus = !this.statusToggleBus;
      if(this.statusToggleBus){
        this.status = 'Normal'
      } else {
        this.status = 'Critical'
      }
      eventBus.$emit('serverDetailChanged', this.status)
    }
  },
  created() {
    eventBus.$on('serverDetailChangedBus', (status) => {
      this.status = status;
    });
  }
}
</script>

<style lang="scss">
#serverBus {
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  align-items:center;
  width:100%;
  button {
    order:-1;
  }
  > div {
    width:100%;
  }
}
</style>
