<template>
    <div>
        <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
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
        <v-toolbar app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
        { to: "/", name: "home", icon: "dashboard" },
        { to: "/about", name: "about", icon: "question_answer" },
        { to: "/hello", name: "hello world", icon: "public" }
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
<style lang="scss">
.v-list .route {
  text-transform: capitalize;
}
</style>