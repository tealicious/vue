<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User: {{name}}</p>
        <p>Age: {{age}}</p>
        <button @click="resetFn" class="btn btn-primary">Reset Name</button>
        <button @click="editAge" class="btn btn-primary">Change Age</button>
    </div>
</template>

<script>
export default {
  methods: {
    editAge() {
      this.age = 30;
      this.$emit("editAge", this.age);
    }
  },
  props: {
    user: Object,
    resetFn: Function,
    name: String,
    age: Number
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
