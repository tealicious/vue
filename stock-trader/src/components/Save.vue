<template>
    <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition">
        <v-btn slot="activator" v-model="fab" color="deep-orange" dark fab>
            <v-icon>save</v-icon>
            <v-icon>close</v-icon>
        </v-btn>
        <v-btn fab dark small color="green">
            <v-icon title="Save">save</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
            <v-icon title="Load">launch</v-icon>
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
      hover: true,
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
      return;
    },
    load() {
      return;
    }
  }
};
</script>
<style>
.v-speed-dial {
  position: fixed;
}
</style>