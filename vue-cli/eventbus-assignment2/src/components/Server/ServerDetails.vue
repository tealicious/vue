<template>
    <div class="col-xs-6">
        <p>Update Server</p>
        <ul class="list-group">
            <li
            v-if="server"
            class="list-group-item"
            :class="server.status">
                <p>Server #{{ server.id }}</p>
                <p>Status: {{ server.status }}</p>
            </li>
        </ul>
        <div v-if="server">
            <button class='btn-info'
                    @click="statusToNormal">Normal</button>
            <button class='btn-warning'
                    @click="statusToUnknown">Unknown</button>
            <button class='btn-danger'
                    @click="statusToCritical">Critical</button>
            <button class='btn-default'
                    @click="clearServer">X</button>
        </div>
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
    methods: {
        statusToNormal() {
            this.server.status = "normal";
        },
        statusToUnknown() {
            this.server.status = "unknown";
        },
        statusToCritical() {
            this.server.status = "critical";
        },
        clearServer() {
            this.server = null;
        }
    },
    created() {
        eventBus.$on('queueServer', (server) => {
            this.server = server;
        });
    }
}
</script>

<style scoped>
.list-group-item {
  color:white;
  cursor:initial;
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
</style>
