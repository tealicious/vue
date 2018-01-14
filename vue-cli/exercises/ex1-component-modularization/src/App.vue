<template>
    <div class="container">
        <app-title></app-title>
        <hr>
        <div class="row">
            <app-server-status :servers="servers"></app-server-status>
            <app-server-details :servers="servers"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>
<script>
let servers = [];
for (let i = 0; i < 5; i++) {
  let server = {
    status: "good",
    index: i + 1
  };
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