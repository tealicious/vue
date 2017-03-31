<template>
  <div>
    <li class="list-group-item" @click="updateServer">{{serverStatus}}</li>
  </div>
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
