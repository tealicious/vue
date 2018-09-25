<template>
  <div class="stocks">
    <h1>{{ name }}</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img src="https://source.unsplash.com/random/600x218" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Stocks",
      stocks: [{}]
    };
  }
};
</script>
<style scoped lang="scss">
</style>
