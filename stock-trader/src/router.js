import Vue from "vue";
import Router from "vue-router";
import User from "./views/User.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      name: "404",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/user",
      component: User,
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("./views/Home.vue")
        },
        {
          path: "stocks",
          name: "stocks",
          component: () => import("./views/Stocks.vue")
        },
        {
          path: "portfolio",
          name: "portfolio",
          component: () => import("./views/Portfolio.vue")
        }
      ]
    }
  ]
});
