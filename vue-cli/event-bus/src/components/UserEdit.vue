<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge()">Edit Age From Here</button>
        <button @click="editAgeFn()">Edit Age From Parent</button>
        <p>name: {{name}}</p>
        <p>Age: {{ age }}</p>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props: {
        name: String,
        age: Number,
        editAgeFn: Function
    },
    methods: {
      editAge() {
        this.age = 21;
        //this.$emit('ageWasChanged', this.age);
        eventBus.$emit('ageWasChanged', this.age);
      }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
