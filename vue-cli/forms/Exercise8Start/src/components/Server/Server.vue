<template>
  <li class="list-group-item"
  @click="serverSelected">
    <p class='number'>
      Server #{{ server.id }}
    </p>
    <p class='status'>
      {{ server.status }}
    </p>
  </li>
</template>

<script>
  import { eventBus } from '../../main'; //move up 2 directories to find main.js
  export default {
    props: ['server'],
    methods: {
      serverSelected() {
        eventBus.$emit('serverSelected', this.server)
      }
    }
  }
</script>
