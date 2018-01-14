<template>
    <div>
        <p>Server Status: {{status | capitalize}}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      status: "critical"
    };
  },
  methods: {
    changeStatus() {
      this.status == "critical"
        ? (this.status = "normal")
        : (this.status = "critical");
    }
  }
};
</script>