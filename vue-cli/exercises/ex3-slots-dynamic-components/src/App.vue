<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="makeBlue">Load Blue Template</button>
                <button class="btn btn-success" @click="makeGreen">Load Green Template</button>
                <button class="btn btn-danger" @click="makeRed">Load Red Template</button>
                <hr>
                <component :is="selectedComponent.component">
                    <p>I'm {{selectedComponent.color}}</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      selectedComponent: {
        component: null,
        color: null
      }
    };
  },
  methods: {
    makeRed() {
      this.selectedComponent.component = "appRed";
      this.selectedComponent.color = "Red";
    },
    makeGreen() {
      this.selectedComponent.component = "appGreen";
      this.selectedComponent.color = "Green";
    },
    makeBlue() {
      this.selectedComponent.component = "appBlue";
      this.selectedComponent.color = "Blue";
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>

</style>
