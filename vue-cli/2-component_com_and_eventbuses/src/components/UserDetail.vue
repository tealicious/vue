<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>User: {{name}}</p>
    <p>Last Name: {{lastName}}</p>
    <p>Age: {{age}}</p>
    <button @click="resetName" class="btn btn-primary">Reset Name</button>
    <button @click="resetLastName" class="btn btn-primary">Reset Last Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  data() {
    return {
      lastName: "Carter"
    };
  },
  props: {
    usr: Object,
    name: String,
    age: Number
  },
  methods: {
    resetName() {
      this.name = "Daniel";
      this.$emit("resetName", this.name);
    },
    resetLastName() {
      this.lastName = "Carter";
      eventBus.$emit("changeNameBack", this.lastName);
    }
  },
  created() {
    // listener on eventBus goes in created() lifecycle hook
    eventBus.$on("editLastName", data => {
      this.lastName = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
