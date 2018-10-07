<template>
  <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition">
    <v-btn slot="activator" v-model="fab" color="deep-orange" dark fab>
      <v-icon>save</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn title="Load" @click="load" fab dark color="indigo">
      <v-icon>cloud_download</v-icon>
    </v-btn>
    <v-btn title="Save" @click="save" fab dark color="green">
      <v-icon>cloud_upload</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
import axios from "axios";
import { fireBase } from "../main";
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
      const data = {
        funds: this.$store.state.funds,
        portfolio: this.$store.state.portfolio
      };
      axios.put(`${fireBase}data.json`, data);
    },
    load() {
      this.$store.dispatch("loadData");
    }
  }
};
</script>
<style>
.v-speed-dial {
  position: fixed;
}
</style>