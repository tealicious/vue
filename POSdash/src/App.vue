<template>
    <div>
        <app-nav></app-nav>
        <div class="pmd-sidebar-overlay"></div>
        <app-aside></app-aside>
        <div id="content" class="pmd-content content-area dashboard">
        	   <album-search></album-search>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AlbumSearch from './components/AlbumSearch.vue'
import Aside from './components/Aside.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
    export default {
        components: {
            albumSearch: AlbumSearch,
            appNav: Nav,
            appAside: Aside,
            appFooter: Footer
        }
    }
</script>

<style lang="scss">
#content {
  min-height:100vh
}
</style>
