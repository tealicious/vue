<template>
    <div>
        <input type="text" v-model="value" @input="updateValue" />
        <p>{{value}}</p>
        <input type="text" :value="value2" @input="updateValue" />
        <p>{{value}}</p>
    </div>
</template>
<script>
export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    },
    value2() {
      return this.$store.getters.value;
    }
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch("updateValue", e.target.value);
    }
  }
};
</script>