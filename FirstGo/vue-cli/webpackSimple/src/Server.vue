<template>
  <div id="server">
    <div>
      <p>Server Status: {{ serverStatus }}</p>
      <button @click="toggleStatus()">Change</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      //status : 'Critical',
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
      this.$emit('serverDetailChanged', this.serverStatus)
    }
  }
}
</script>

<style lang="scss">
#server {
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
