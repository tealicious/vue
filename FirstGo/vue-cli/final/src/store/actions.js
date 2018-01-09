import Vue from 'vue';
import axios from 'axios';

export const fetchData = (state) => {
  Vue.axios.get('https://vue-project-final.firebaseio.com/data.json').then((response) => {
    const stocks = response.data.stocks;
    const funds = response.data.funds;
    const portfolioStocks = response.data.portfolioStocks;
    const portfolio = {
      portfolioStocks,
      funds
    }
    state.funds = funds;
  });
}