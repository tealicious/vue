<template>
  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <v-btn
      slot="activator"
      v-model="fab"
      color="deep-orange"
      dark
      fab
    >
      <v-icon>save</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      title="Load"
      @click="load"
      fab
      dark
      color="indigo"
    >
      <v-icon>get_app</v-icon>
    </v-btn>
    <v-btn
      title="Save"
      @click="save"
      fab
      dark
      color="green"
    >
      <v-icon>save</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
export default {
  data() {
    return {
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition"
    };
  },
  methods: {
    save() {
      this.$store.dispatch("savePortfolio");
    },
    load() {
      this.$store.dispatch("loadPortfolio");
    }
  }
};
</script>
<style>
.v-speed-dial {
  position: fixed;
}
</style>