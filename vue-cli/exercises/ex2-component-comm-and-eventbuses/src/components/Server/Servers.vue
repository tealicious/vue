<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="(server,i) in servers" :server="server" :key="i"></app-server>
        </ul>
    </div>
</template>

<script>
import Server from "./Server.vue";
let servers = [];
for (let i = 0; i < 5; i++) {
  let server = {
    status: "Critical",
    index: i + 1
  };
  servers.push(server);
}
export default {
  data() {
    return {
      servers: servers
    };
  },
  methods: {
    queuServer() {
      eventBus.$emit("queuServer", this);
    }
  },
  components: {
    appServer: Server
  }
};
</script>
