<template>
    <div class="col-xs-6">
        <ul class="list-group">
            <server
            :servers = "servers"
            v-for="server in servers"
            :server = "server"
            ></server>
        </ul>
    </div>
</template>

<script>
import server from './Server.vue';
export default {
  data: function() {
      return {
        servers: [
          {id:1, status:'normal', isActive:false},
          {id:2, status:'unknown', isActive:false},
          {id:3, status:'critical', isActive:false}
        ]
      }
    },
  components: {
    server : server
  }
}
</script>

<style>
.list-group-item{
  display:flex;
  justify-content:space-between;
  cursor:pointer;
  transition:all .2s ease;
}

</style>
