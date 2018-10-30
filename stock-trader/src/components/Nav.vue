<template>
    <div>
        <v-navigation-drawer
            persistent
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            enable-resize-watcher
            fixed
            app
            dark
        >
            <v-list>
                <v-list-tile
                    @click.stop="miniVariant = !miniVariant"
                >
                    <v-list-tile-action>
                        <v-btn icon>
                            <v-icon
                                v-html="miniVariant ? 'chevron_right' : 'chevron_left'"
                            ></v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-toolbar-title v-text="title"></v-toolbar-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                    v-for="(route, i) in routes"
                    :key="i"
                    @click="pushRoute(route.to)"
                >
                    <v-list-tile-action>
                        <v-btn icon>
                            <v-icon>{{ route.icon }}</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-list-tile-title
                                class="route"
                            >{{ route.name }}</v-list-tile-title>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
            dark
            class="blue"
            app
            :clipped-left="clipped"
        >
            <v-toolbar-side-icon
                @click.stop="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <div class="nav-wrap-wrap hidden-md-and-down">
                <div class="nav-wrap">
                    <template v-if="hasLoadedPortfolio">
                        <div class="mr-4">
                            <strong>Funds: {{funds | currency}}</strong>
                        </div>
                        <div class="mr-4">
                            <strong>Portfolio: {{portfolioValue | currency}}</strong>
                        </div>
                        <div class="mr-4">
                            <strong>Total: {{totalWorth | currency}}</strong>
                        </div>
                        <app-signout></app-signout>
                    </template>
                </div>
            </div>
        </v-toolbar>
    </div>
</template>
<script>
import appSignout from "./Signout.vue";
export default {
  components: {
    appSignout
  },
  props: ["hasLoadedPortfolio"],
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      miniVariant: false,
      title: "Crypto-Trader",
      routes: [
        { to: "/user/home", name: "home", icon: "account_circle" },
        { to: "/user/stocks", name: "stocks", icon: "trending_up" },
        { to: "/user/portfolio", name: "portfolio", icon: "work" }
      ]
    };
  },
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    }
  }
};
</script>
<style  lang="scss">
.nav-wrap-wrap {
  flex: 1 1 100%;
  position: relative;
  height: 100%;
  width: 100%;
}
.nav-wrap {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  max-width: 1120px;
  @media (min-width: 1904px) {
    max-width: 1235px;
  }
}
</style>