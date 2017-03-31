<template>
    <li :class="{ 'updated' : active }" class="list-group-item special" @click="updateServer">{{serverStatus}}</li>
</template>

<script>
export default {
  data: function() {
    return {
      serverStatus: 'Server Details are currently not updated',
      active: false
    }
  },
  methods: {
    updateServer() {
      this.active = !this.active;
      this.serverStatus = this.active ?  'Server Have Been Updated' : 'Server Details are currently not updated';
      //same toggle two ways
      // if (this.active) {
      //   this.serverStatus = 'Server Have Been Updated';
      // } else {
      //   this.serverStatus = 'Server Details are currently not updated?';
      // }
    }
  }
}
</script>


<style scoped>
.list-group-item{
  border: 1px solid firebrick;
  cursor:pointer;
}
.list-group-item.updated {
  border:1px solid slateblue;
}
</style>
