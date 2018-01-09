<template>
  <div >
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
    components: {
      //by placing the ServerStatus component in it's one Vue file, we can store it here and create a loop for it in this template, wrapping a template in another template to create a loop of the original template
      'app-server-status': ServerStatus
    }
  }
</script>

<style lang="css">
</style>
