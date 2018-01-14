<template>
    <li class="list-group-item" @click="sendServer">
        Server #{{ server.index }} | Status: {{server.status}}
    </li>
</template>
<script>
import { eventBus } from "../../main.js";
export default {
  props: ["server"],
  methods: {
    sendServer() {
      eventBus.$emit("enqueueServer", this.server);
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover {
  background: lightgray;
}
</style>