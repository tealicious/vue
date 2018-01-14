<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="(server, i) in servers" :key="i" :server="server"></app-server>
        </ul>
    </div>
</template>
<script>
export default {
  props: ["servers"]
};
</script>