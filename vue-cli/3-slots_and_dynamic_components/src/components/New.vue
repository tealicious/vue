<template>
    <div>
        <slot></slot>
        <button @click="counter++">Add</button>
        <p>{{counter}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("destroyed!");
  },
  deactivated() {
    console.log("deactivated!");
  }
};
</script>