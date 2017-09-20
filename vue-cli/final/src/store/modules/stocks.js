import staticStocks from '../../data/stocks';
import axios from 'axios';
const state = {
  stocks: [],
  staticStocks: []
};
const mutations = {
  setStocks(state, staticStocks) {
    state.staticStocks = staticStocks;
  },
  randomizeStocks() {},
  getCryptoCurrencies(state) {
    const getUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
    axios.get(getUrl).then((response) => {
      state.stocks = response.data // we gona use real stocks from an api call
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
    commit('setStocks', staticStocks)
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
  },
  staticStocks: state => {
    return state.staticStocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
