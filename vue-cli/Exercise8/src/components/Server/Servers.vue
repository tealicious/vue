<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                Server #{{ id }}
            </li>
        </ul>
    </div>
</template>

<script>
  // assignment: loop through the servers, make them clickable and the click event to load the server data with the ServerDetails component
  // Once the server is in the serverDetails component, place a button that will change the status in both components back to 'normal'
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

</style>
