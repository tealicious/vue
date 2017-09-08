<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-click-dis:grow.fade='{fontSize: "55px"}'>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'click-dis': {
          bind(el, binding, vnode) {
            function doTheThing(){
                if(binding.arg = 'grow'){
                    el.style.fontSize = binding.value.fontSize;
                }
            }
            el.addEventListener('click', doTheThing);
          }
        }
      }
    }
</script>

<style>
</style>
