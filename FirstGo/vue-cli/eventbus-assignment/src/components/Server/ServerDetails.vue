<template>
    <div class="col-xs-12 col-sm-6">
        <p>Change Server Status</p>
        <ul class="list-group">
            <li
            v-if="server"
            class="list-group-item">
                <p>Server #{{ server.id }}</p>
                <p>Stataus: {{ server.status }}</p>
            </li>
            <button class='btn-info' @click="giveStatusNormal">Normal</button>
            <button class='btn-danger' @click="giveStatusCritical">Critical</button>
            <button class='btn-warning' @click="giveStatusUnknown">Unknown</button>
        </ul>
    </div>

</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function() {
        return {
            server: null
        }
    },
    methods: {
        giveStatusNormal() {
            this.server.status = "Normal";
        },
        giveStatusCritical() {
            this.server.status = "Critical";
        },
        giveStatusUnknown() {
            this.server.status = "Unknown";
        }
    },
    created() {
        eventBus.$on('selectServer', (server) => {
            this.server = server;
        });
    }
}
</script>

<style>
button {
    margin-top:1rem;
}
</style>
