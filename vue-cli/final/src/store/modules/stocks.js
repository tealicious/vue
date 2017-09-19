import stocks from '../../data/stocks';
import axios from 'axios';
const state = {
  stocks: [],
  staticStocks: []
};
const mutations = {
  setStocks(state, stocks) {
    state.staticStocks = stocks;
  },
  rndStocks() {},
  getCryptoCurrencies(state, stocks) {
    const getUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
    axios.get(getUrl).then((response) => {
      state.stocks = response.data // we gona use real stocks from an api call
      console.log(state.stocks)
    });
  }
};

const actions = {
  buyStock: ({
    commit
  }, order) => { //order is the payload from the stock.vue file
    commit('buyStock', order);
  },
  initStocks: ({
    commit
  }) => {
    commit('setStocks', stocks)
  },
  initCrypto: ({
    commit
  }) => {
    commit('getCryptoCurrencies')
  },
  randomizeStocks: ({
    commit
  }) => {
    commit('rndStocks')
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
