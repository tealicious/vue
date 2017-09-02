<template>
    <li class="list-group-item"
        :class="server.status "
        @click="queueServer">
        <p>Server #{{ server.id }}</p>
        <p>Status: {{ server.status }}</p>
    </li>
</template>

<script>
  import {eventBus} from '../../main';
  export default {
    data: function() {
      return {
        isActive: false
      }
    },
    props: ['server'],
    methods: {
      queueServer() {
        this.isActive = !this.isActive;
        eventBus.$emit('queueServer', this.server);
      }
    }
  }
</script>
<style scoped>
.critical p:nth-of-type(2) {
  color:#d9534f;
}
.normal p:nth-of-type(2) {
  color:#5bc0de;
}
.unknown p:nth-of-type(2) {
  color:#f0ad4e;
}
</style>
