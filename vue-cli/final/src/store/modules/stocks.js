import stocks from '../../data/stocks';
const state = {
  stocks: []
};
const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  rndStocks() {},
  getCryptoCurrencies() {
    const getUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
    axios.get(getUrl).then((response) => {
      state.cryptoCurrencies = response.data
      // this.state.cryptoCurrencies.forEach(cryptoCurrency => this.addImageAndDescription(cryptoCurrency))
    });
  }
};
const actions = {
  buyStock: ({
    commit
  }, order) => {
    commit();
  },
  initStocks: ({
    commit
  }) => {
    commit('setStocks', stocks)
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
