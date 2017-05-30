<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
            v-for="server in servers"
            :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
  // assignment: loop through the servers, make them clickable and make the click event load the server data into the ServerDetails component
  // Once the server is in the serverDetails component, place a button that will change the status in both components back to 'normal'


  import { eventBus } from '../../main'; //move up 2 directories to find main.js
  import Server from './Server.vue';

  export default {
    data: function() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Critical'},
          { id: 3, status: 'Unknown'},
          { id: 4, status: 'Normal'},
        ]
      };
    },
    components: {
      appServer: Server
    }
  }
</script>
