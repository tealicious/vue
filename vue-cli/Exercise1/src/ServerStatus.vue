<template>
  <ul class="list-group">
    <li class="list-group-item" @click="updateServer">{{serverStatus}}</li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      serverStatus: 'Server Details are currently not updated'
    }
  },
  methods: {
    updateServer() {
      this.serverStatus = "Server Have Been Updated"
    }
  }
}
</script>
