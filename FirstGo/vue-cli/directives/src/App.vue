<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'v-text'"></p>
                <p v-html="'<strong>v-html</strong>'"></p>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'slategray'">color this</p>
                <p v-local-highlight:background.delayed="'slategray'">color this</p>
                <p v-highlight="'slategray'">color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0;
                if(binding.modifiers['delayed']){
                  delay = 3000;
                }
                setTimeout(()=>{
                  if( binding.arg == 'background' ) {
                    el.style.backgroundColor = binding.value;
                    el.style.color = 'white';
                  } else {
                    el.style.color = binding.value;
                  }
                }, delay);
                }
            }
        }
    }
</script>

<style>

</style>
