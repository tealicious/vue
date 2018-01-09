<template>
  <li class="list-group-item"
      :class="[{clicked : server.isActive}, server.status]"
      @click="shareServer">
      Server {{server.id}}: {{server.status}}
  </li>
</template>

<script>
import {eventBus} from '../../main';
export default {
  props: ['server', 'servers'],
  methods: {
    shareServer() {
      if(this.server.isActive) {
        this.server.isActive = false;
      } else {
        this.servers.forEach(function(server){
          server.isActive = false;
        });
        this.server.isActive = !this.server.isActive;
      }
      eventBus.$emit('shareServer', this.server);
    }
  }
}
</script>

<style scoped>
.critical {
  color:#d9534f;
}
.normal {
  color:#5bc0de;
}
.unknown {
  color:#f0ad4e;
}
.clicked {
  color:white;
}
.critical.clicked {
  background-color:#d9534f;
}
.normal.clicked {
  background-color:#5bc0de;
}
.unknown.clicked {
  background-color:#f0ad4e;
}
</style>
