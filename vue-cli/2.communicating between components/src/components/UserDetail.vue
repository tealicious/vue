<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>User: {{name}}</p>
        <p>Age: {{age}}</p>
        <button @click="resetName" class="btn btn-primary">Reset Name</button>
    </div>
</template>

<script>
export default {
  props: {
    usr: Object,
    name: String,
    age: Number
  },
  methods: {
    resetName() {
      this.name = "Daniel";
      this.$emit("resetName", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
