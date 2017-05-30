<template>
    <div class="col-xs-12 col-sm-6">
      <li class="list-group-item">
        <p class='number'>
          Server Details are currently not updated
        </p>
      </li>
      <li class="list-group-item">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{server.id}} selected, Status: {{server.status}}</p>
      </li>
      <li v-if="server" class="list-group-item special">
        <button class='btn-info'
        @click="resetStatus">Normal</button>
        <button class='btn-info'
        @click="resetStatusCritical">Critical</button>
        <button class='btn-info'
        @click="resetStatusUnknown">Unkown</button>
      </li>
    </div>

</template>

<script>
import { eventBus } from '../../main';
export default {
  data: function() {
    return {
      server: null
    }
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    },
    resetStatusCritical() {
      this.server.status = 'Critical';
    },
    resetStatusUnknown() {
      this.server.status = 'Unknown';
    }
  },
  created() {
    eventBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  }
}
</script>

<style>
.list-group-item.special {
  justify-content: flex-start;
}
button {
  margin:0 2rem 0 0;
}
</style>
