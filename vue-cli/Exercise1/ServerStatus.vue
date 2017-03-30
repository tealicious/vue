<template @click="updateServer">
      <li class="list-group-item">{{serverStatus}}</li>
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
