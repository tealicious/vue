<template>
    <div class="col-xs-6">
      <p>Select to change status</p>
        <ul class="list-group">
          <server
          v-for="server in servers"
          :server="server"></server>
        </ul>
    </div>
</template>

<script>
import server from './Server.vue';
export default {
    data: function() {
        return {
            servers: [
                {id: 1, status: 'critical'},
                {id: 2, status: 'normal'},
                {id: 3, status: 'unknown'},
                {id: 4, status: 'critical'}
            ]
        };
    },
    components: {
        server:server
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
