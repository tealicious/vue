<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item">
                <p class='number'>
                  Server Details are currently not updated
                </p>
            </li>
            <li
                class="list-group-item"
                v-for="server in servers">
                <p class='number'>
                  Server #{{ server.id }}
                </p>
                <button class='status'>
                  {{ server.status }}
                </button>
            </li>
        </ul>
    </div>

</template>

<script>

import { eventBus } from '../../main';

export default {
  data: function() {
    return {
      //status : 'Critical',
      statusToggle: false
    };
  },
  props: {serverStatus: String},
  methods: {
    toggleStatus() {
      this.statusToggle = !this.statusToggle;
      if(this.statusToggle){
        this.serverStatus = 'Normal'
      } else {
        this.serverStatus = 'Critical'
      }
      this.$emit('serverDetailChanged', this.serverStatus)
    }
  }
}

</script>

<style>

</style>
