<template>
    <div style="height:100%;">
        <app-nav></app-nav>
        <div class="pmd-sidebar-overlay" :class="{'pmd-sidebar-overlay-active' : toggle}"></div>
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
import {eventBus} from './main';
    export default {
        data() {
          return {
            toggle: false
          }
        },
        components: {
            albumSearch: AlbumSearch,
            appNav: Nav,
            appAside: Aside,
            appFooter: Footer
        },
        created() {
              eventBus.$on('startAjax', (toggle)=> {
                this.toggle = toggle;
                console.log(toggle, this.toggle, 'wut?')
              })
              eventBus.$on('getAlbumList', ()=> {
                this.toggle = false;
                console.log(this.toggle, 'wut?')
                console.log('wut?')
              })
          }
    }
</script>

<style lang="scss">
.flex-container-content {
  display:flex;
  flex-direction:column;
  height:100vh;
  #content {
    padding-bottom:0;
  }
  @media screen and (max-width: 767px) {
    footer {
      margin:0;
    }
  }
}
.pmd-sidebar-overlay {
  transition: opacity .2s ease-in;
}
@media (min-width: 768px){
  .pmd-sidebar-overlay.pmd-sidebar-overlay-active {
      visibility: visible;
      opacity: .5;
  }
}

</style>
