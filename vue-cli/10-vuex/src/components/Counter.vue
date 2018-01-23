<template>
    <div>
        <button class="btn btn-primary" @click="increment()">Increment</button>
        <button class="btn btn-primary" @click="delayedIncrement({by:100, duration:500})">Delayed Increment</button>
        <button class="btn btn-primary" @click="decrement()">Decrement</button>
        <button class="btn btn-primary" @click="delayedDecrement({by:100, duration:500})">Delayed Decrement</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["delayedIncrement", "delayedDecrement"])
  }
};
</script>