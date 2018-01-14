<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <p>{{selectedComponent}}</p>
        <!-- this is a synamic component, it is destroyed and recreated as it changes components -->
        <component :is="selectedComponent">
          <!-- slots can be given specificity -->
          <h2 slot="title">{{quoteTitle}}</h2>
          <!-- unassigned content gets placed into the unnamed slot -->
          <p>{{quote}}</p>
        </component>
        <!-- keep-alive wrapper will ensure components are not destroyed on exit -->
        <keep-alive>
          <component :is="selectedComponent">
            <!-- slots can be given specificity -->
            <h2 slot="title">{{quoteTitle}}</h2>
            <!-- unassigned content gets placed into the unnamed slot -->
            <p>{{quote}}</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";
export default {
  data() {
    return {
      quoteTitle: "The Quote",
      quote: "dynamic components",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
/* scoped styles get passed down into child slots */
h2 {
  color: red;
}
</style>
