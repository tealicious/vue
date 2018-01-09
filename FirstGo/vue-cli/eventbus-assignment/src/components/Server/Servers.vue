<template>
    <div class="col-xs-12 col-sm-6">
      <p>Select a server to change status</p>
        <ul class="list-group">
            <server
            v-for="server in servers"
            :server="server">
            </server>
        </ul>
    </div>
</template>

<script>
import server from './Server.vue';
export default {
    data: function() {
        return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Normal'}
            ]
        };
    },
    components: {
      server: server
    }
}
</script>

<style>
.list-group-item{
  display:flex;
  justify-content:space-between;
  cursor:pointer;
}
</style>
