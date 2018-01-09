<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="(server, i) in servers" :key="i" :server="server" :i="i+1"></app-server>
        </ul>
    </div>
</template>
<script>
let servers = [];
for (let i = 0; i < 5; i++) {
  let server = { status: "good" };
  servers.push(server);
}
export default {
  data() {
    return {
      servers: servers
    };
  }
};
</script>