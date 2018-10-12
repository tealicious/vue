<template>
  <v-app light>
    <app-nav></app-nav>
    <v-content>
      <div class="container grid-list-lg">
        <router-view />
        <app-save></app-save>
      </div>
    </v-content>
    <app-foot></app-foot>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Foot from "./components/Foot.vue";
import Save from "./components/Save.vue";
export default {
  components: {
    appNav: Nav,
    appFoot: Foot,
    appSave: Save
  },
  computed: {
    calls() {
      return this.$store.getters.calls;
    }
  },
  watch: {
    calls: function() {
      setTimeout(() => {
        this.getStocks();
      }, 30000);
    }
  },
  methods: {
    getStocks() {
      return this.$store.dispatch("setStocks").then(() => {
        this.$store.dispatch("setStockPrices");
      });
    },
    getStocksAndPortfolio() {
      this.getStocks().then(() => {
        this.$store.dispatch("loadPortfolio");
      });
    }
  },
  created() {
    this.getStocksAndPortfolio();
  }
};
</script>
<style lang="scss" >
.application--light {
  background: #f5f5f5;
}
.v-list .route {
  text-transform: capitalize;
}

.theme--dark {
  &.v-list,
  &.v-navigation-drawer {
    background-color: #1f2f46;
  }
}
.content {
  margin-top: 64px;
}
.user-icon {
  height: 90%;
  width: auto;
  margin-bottom: 9px;
}
.mobile-menu {
  @media screen and (min-width: 1264px) {
    display: none;
  }
}
.desktop-menu {
  display: none;
  @media screen and (min-width: 1264px) {
    display: block;
  }
}
.toolbar {
  z-index: 1;
  position: fixed;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.search-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: visibility 0 linear 0.4s,
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  transition: opacity 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1264px) {
    .progress-circular {
      margin-left: 300px;
      transition: margin 0.2s ease;
    }
    &.drawer-mini {
      .progress-circular {
        margin-left: 80px;
      }
    }
  }
}
.search-overlay.search-overlay-active {
  visibility: visible;
  opacity: 1;
}
.application .theme--dark.navigation-drawer {
  background-color: #1f2f46;
}
.new-active {
  a {
    .list__tile__action,
    .list__tile__content {
      color: #c8c8c8 !important;
      .icon {
        color: #c8c8c8 !important;
      }
    }
  }
  a.router-link-exact-active {
    .list__tile__action,
    .list__tile__content {
      color: white !important;
      .icon {
        color: white !important;
      }
    }
  }
}
.application--light {
  background: #f5f5f5;
  background: #f5f5f5;
  background: -webkit-linear-gradient(top, #f5f5f5, #f4f4f4);
  background: -moz-linear-gradient(top, #f5f5f5, #f4f4f4);
  .footer {
    background: white;
  }
}
.blue {
  background-color: #4285f4 !important;
  border-color: #4285f4 !important;
}
.toolbar__title {
  @media screen and (max-width: 700px) {
    display: none;
  }
}
.tabs__bar {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
@media only screen and (min-width: 1904px) {
  .container {
    max-width: 1300px;
  }
}
</style>
