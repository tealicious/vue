<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <br />
                <transition name="fade" mode="out-in">
                    <app-header></app-header>
                </transition>
                <hr />
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    /*TRANSITION ANIMATIONS*/
    .fade-enter, .fade-leave-to {
        /* set tranisition styles on enter and leave-to*/
        opacity:0;
    }
    .fade-enter {
        transform:scale(1.1);
    }
    .fade-enter-active, .fade-leave-active {
        transition:all 300ms cubic-bezier(0.68, -0.1, 0.265, 1.55);
        /* set beziers on active classes */
    }
</style>
