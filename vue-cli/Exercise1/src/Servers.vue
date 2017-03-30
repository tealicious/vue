<template>
  <div>
      <single-server-status v-for="server in 5"></single-server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  components: {
    'single-server-status': ServerStatus
  }
}
</script>
