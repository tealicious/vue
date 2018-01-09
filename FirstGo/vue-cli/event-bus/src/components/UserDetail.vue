<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ switchName() }}</p>
        <p>Age: {{age}}</p>
        <button @click="resetName">Reset Name From Here</button>
        <button @click="resetFn()">Reset Name From Parent</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    props: {
        name: String,
        resetFn : Function,
        age: Number
    },
    methods: {
        switchName() {
            return this.name.split("").reverse().join("");
        },
        resetName() {
            this.name = "Daniel";
            this.$emit('nameWasReset', this.name);
        }
    },
    created() {
      eventBus.$on('ageWasChanged', (age) => {
          this.age = age;
      });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
