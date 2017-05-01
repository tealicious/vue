<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
        <server-count></server-count>
      </div>
      <div class="col-xs-12 col-sm-6">
        <server-status></server-status>
      </div>
  </div>
</template>

<script>
import ServerStatus from './Servers.vue'
import ServerCount from './ServerCount.vue'
export default {
  components: {
    'server-status': ServerStatus,
    'server-count': ServerCount
  }
}
</script>
