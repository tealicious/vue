<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  //pass the userage prop 'age' to this child component
  props: ['userAge'],
  // we will be using the user age from the parent component, changing it in the child 'userEdit' component and passing the change to the sibling 'userDetail' component
    methods : {
    editAge() {
      this.userAge = 30;
      //This will only change the prop that has been passed to this template
      this.$emit('ageWasEdited', this.userAge)
      // emitting the userAge data object to be sent to the parent then back down
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
