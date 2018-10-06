<template>
    <div>
        <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app dark>
            <v-list>
                <v-list-tile @click.stop="miniVariant = !miniVariant">
                    <v-list-tile-action>
                        <v-btn icon>
                            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-toolbar-title v-text="title"></v-toolbar-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for="(route, i) in routes" :key="i" @click="pushRoute(route.to)">
                    <v-list-tile-action>
                        <v-btn icon>
                            <v-icon>{{ route.icon }}</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <v-list-tile-title class="route">{{ route.name }}</v-list-tile-title>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark class="blue" app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <div><strong>Funds: {{funds | currency}}</strong></div>
            <div class="ml-3"><strong>Portfolio: {{portfolioValue | currency}}</strong></div>
            <div class="ml-3"><strong>Total: {{totalWorth | currency}}</strong></div>
        </v-toolbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      miniVariant: true,
      title: "Crypto-Trader",
      routes: [
        { to: "/", name: "home", icon: "account_circle" },
        { to: "/stocks", name: "stocks", icon: "trending_up" },
        { to: "/portfolio", name: "portfolio", icon: "work" }
      ]
    };
  },
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    }
  },
  computed: {
    funds() {
      return this.roundToTwo(this.$store.getters.funds);
    },
    portfolioValue() {
      return this.roundToTwo(this.$store.getters.portfolioValue);
    },
    totalWorth() {
      return this.roundToTwo(this.funds + this.portfolioValue);
    }
  }
};
</script>
<style lang="scss">
</style>