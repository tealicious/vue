import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
Vue.use(Vuex);

import stocks from './modules/stocks';

export const store = new Vuex.Store({
  modules: {
    stocks: {
      namespaced: true
    },
    portfolio: {
      namespaced: true
    }
  }
});
