<template>
    <li class="list-group-item">
        Server #{{ i }}
    </li>
</template>
<script>
export default {
  props: ["server", "i"]
};
</script>