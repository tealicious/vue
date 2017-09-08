<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'slategray', secondColor: 'whitesmoke', mainTextColor: 'white', secondTextColor:'black', delay: 500}">Color this, too</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'whitesmoke', secondColor: 'slategray', mainTextColor: 'black', secondTextColor:'white', delay: 500}">Color this, too</p>
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
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let mainTextColor = binding.value.mainTextColor;
                        let secondTextColor = binding.value.secondTextColor;
                        let currentColor = mainColor;
                        let currentTextColor = mainTextColor;
                        setTimeout(() => {
                            setInterval(() => {
                                // if else statement
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                currentTextColor == secondTextColor ? currentTextColor = mainTextColor : currentTextColor = secondTextColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                    el.style.color = currentTextColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>
</style>
