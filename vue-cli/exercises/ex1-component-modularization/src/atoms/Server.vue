<template>
    <li class="list-group-item">
        Server #{{ server.index }} Status {{server.status}}
    </li>
</template>
<script>
export default {
  props: ["server"]
};
</script>