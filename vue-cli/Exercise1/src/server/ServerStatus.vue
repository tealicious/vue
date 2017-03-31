<template>
    <li :class="{ 'updated' : active }" class="list-group-item special" @click="updateServer">{{active ?  'Server Have Been Updated' : 'Server Details are currently not updated' }}</li>
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
      this.active = !this.active
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
