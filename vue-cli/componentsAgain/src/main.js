//1.
import Vue from 'vue'
//calling to the vue node module to import vue?
import App from './App.vue'
// main.js becomes the last link in the chain before a view is created, but it imports templates such as the one in app.js. these templates behave like component objects

//How do we import from a new .Vue exported object??
//using home.vue as an example....

//1. import .vue template into a global component
import MushroomLoop from './MushroomLoop.vue'
Vue.component('mushroom-loop', MushroomLoop);
              //^name of new, custom vue element followed by the object stored in the 'home' variable we just imported from the home.vue file


//this exercise first creates a template in the mushroomsoup.vue file
//mushroomloop then locally imports that mushroomsoup component object into it's own new component object
//from there it can create a new for loop template
//and main.js imports that final component globally to be spit out into the view (a component containing a component used in a for looping template)


new Vue({
  el: '#app',
  render: h => h(App)
  //^mimicking a template
})
