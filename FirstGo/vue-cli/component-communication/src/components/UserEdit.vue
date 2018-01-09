<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit Age</button>
        <p>{{userAge}}</p>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props:['userAge'],
  methods: {
    editAge() {
      this.userAge = 30;
      //this.$emit('ageWasEdited', this.userAge);
      //emit to parent in order to effect the parent .age data object which can be then be two-way bound and passed into the sibling template
      eventBus.$emit('ageWasEdited', this.userAge);
      //alternatively, call to the eventBuss constant created in the main.js file
    }
  },
  created() {
    //a special lifecycle event 'created()' can listen to the changes synced to the eventbus in order to bind data between sibling components
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    });
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
