import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      name: "404",
      component: Home
    },
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("./views/Stocks.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("./views/Portfolio.vue")
    }
  ]
});
