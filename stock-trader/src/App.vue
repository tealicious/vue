<template>
  <v-app dark>
    <app-nav></app-nav>
    <v-content>
      <div class="container grid-list-lg">
        <router-view />
      </div>
    </v-content>
    <app-foot></app-foot>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Foot from "./components/Foot.vue";
export default {
  components: {
    appNav: Nav,
    appFoot: Foot
  }
};
</script>
