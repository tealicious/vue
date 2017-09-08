<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-customOn:click="fontChange" :style="styleObject">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-customOn:mouseenter="grow" v-customOn:mouseleave="shrink" :style="styleObjectBox"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
                return {
                    styleObject: {
                        fontSize: '36px'
                    },
                    styleObjectBox: {
                        width:'0px',
                        height:'0px',
                        minWidth:'100px',
                        minHeight:'100px',
                        background:'lightgreen',
                        margin: 'auto',
                        transition: 'all .2s ease'
                    },
                    toggle: true
                }
        },
        directives: {
            customOn: {
                bind(el, binding) {
                    // el.onclick= function() {
                    //     binding.value();
                    // }
                    const type = binding.arg;
                    const fn   = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            fontChange() {
                this.toggle == true ? this.styleObject.fontSize = '55px' : this.styleObject.fontSize = '36px';
                this.toggle = !this.toggle;
            },
            grow() {
                this.styleObjectBox.minHeight = '200px';
                this.styleObjectBox.minWidth = '200px';
            },
            shrink() {
                this.styleObjectBox.minHeight = '100px';
                this.styleObjectBox.minWidth = '100px';
            }
        }
    }
</script>

<style>
h1, div {
    cursor:pointer;
}
</style>
