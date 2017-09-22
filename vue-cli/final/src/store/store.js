import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  },
  mutations: {
    fetchData(state) {
      axios.get('https://vue-project-final.firebaseio.com/data.json').then((response) => {
        if (response.data) {
          const stocks = response.data.stocks;
          const funds = response.data.funds;
          const portfolioStocks = response.data.portfolioStocks;
          state.stocks.stocks = stocks;
          state.portfolio.funds = funds;
          console.log(state.portfolio.portfolioStocks)
          if (portfolioStocks) {
            state.portfolio.portfolioStocks = portfolioStocks;
          } else {
            state.portfolio.portfolioStocks = [];
          }
        }
      });
    }
  },
  actions: {
    fetchData: ({
      commit
    }, order) => { //order is the payload from the stock.vue file
      commit('fetchData');
    }
  }
});
