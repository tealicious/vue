<template>
  <li class="list-group-item"
  @click="selectServer">
    <p>Server #{{ server.id }}</p>
    <p>Stataus: {{ server.status }}</p>
  </li>
</template>

<script>
  import { eventBus } from '../../main';
  export default {
    props: ['server'],
    methods: {
      selectServer() {
        eventBus.$emit('selectServer', this.server);
      }
    }
  }
</script>
