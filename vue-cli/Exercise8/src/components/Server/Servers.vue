<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <p class='number'>
                  Server #{{ server.id }}
                </p>
                <p class='status'>
                  {{ server.status}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
  // assignment: loop through the servers, make them clickable and make the click event load the server data into the ServerDetails component
  // Once the server is in the serverDetails component, place a button that will change the status in both components back to 'normal'


  import { eventBus } from '../../main'; //move up 2 directories to find main.js

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
    }
  }
</script>



<style>
.list-group-item {
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
}
p {
  margin-bottom:0;
}

</style>
