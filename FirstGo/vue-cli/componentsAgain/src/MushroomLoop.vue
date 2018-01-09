<!-- 3. -->
<template>
  <div>
    <mushroom-loop v-for="soup in 5"></mushroom-loop>
    <!-- wrap a for-loop element in a root/parent div -->
  </div>
</template>

<script>
//2. second way to import a component, locally to a vue template
import MushroomSoup from './MushroomSoup.vue'
    export default {
      components: {
        'mushroom-loop': MushroomSoup
        //^new custome element then we just named the object in the import line
      }
    }
</script>

<style>

</style>
