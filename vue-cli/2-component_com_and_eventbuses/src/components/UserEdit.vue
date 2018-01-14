<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User: {{name}}</p>
    <p>Last Name: {{lastName}}</p>
    <p>Age: {{age}}</p>
    <button @click="resetFn" class="btn btn-primary">Reset Name</button>
    <button @click="editAge" class="btn btn-primary">Change Age</button>
    <button @click="editLastName" class="btn btn-primary">Change Last Name</button>
  </div>
</template>


<script>
// this component shows three different ways to emit a change to a sibling, first with Vue's native $emit method, which the parent component listens to in order to make a change to data and pass the new data down to all child components, second as a callback function passed from the parent as props which again changes the parent data and passes it to all child components, and third using an eventbus which acts as a go-between in order to pass data directly between components regardless of their relationship.
import { eventBus } from "../main";
export default {
  data() {
    return {
      lastName: "Carter"
    };
  },
  methods: {
    editAge() {
      this.age = 30;
      this.$emit("editAge", this.age);
    },
    editLastName() {
      this.lastName = "DisGuy";
      eventBus.$emit("editLastName", this.lastName);
    }
  },
  props: {
    user: Object,
    resetFn: Function,
    name: String,
    age: Number
  },
  created() {
    // listener on eventBus goes in created() lifecycle hook
    eventBus.$on("changeNameBack", data => {
      this.lastName = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
