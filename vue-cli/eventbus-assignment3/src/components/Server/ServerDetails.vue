<template>
    <div class="col-xs-6">
        <li v-if="server"
            class="list-group-item"
            :class="server.status">
            Server {{server.id}}: {{server.status}}
            <button class='normal'
            @click="makeNormal"></button>
            <button class='unknown'
            @click="makeUnknown"></button>
            <button class='critical'
            @click="makeCritical"></button>
        </li>
    </div>

</template>

<script>
import {eventBus} from '../../main';
export default {
  data: function() {
    return {
      server: null
    }
  },
  created() {
    eventBus.$on('shareServer', (server)=>{
       this.server = server;
    });
  },
  methods: {
    clearServer() {
      this.server = null;
    },
    makeNormal() {
      this.server.status = 'normal';
    },
    makeUnknown() {
      this.server.status = 'unknown';
    },
    makeCritical() {
      this.server.status = 'critical';
    }
  }
}

</script>

<style scoped>
.list-group-item {
  color:white;
  cursor:initial;
  display:flex;
  justify-content:flex-end;
}
.critical {
  background-color:#d9534f;
}
.normal {
  background-color:#5bc0de;
}
.unknown {
  background-color:#f0ad4e;
}
button {
  width:15px;
  padding:0;
  height:15px;
  border-radius:100%;
  margin-right:1rem;
  align-self:center;
}
button:first-of-type {
  margin-left:auto;
}
</style>
