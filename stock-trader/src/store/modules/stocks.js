import axios from "axios";

const state = {
  stocks: null
};

const mutations = {
  SET_STOCKS(state) {
    axios
      .get("https://min-api.cryptocompare.com/data/all/coinlist")
      .then(function(response) {
        const stocks = response.data.Data;
        const stocksArray = Object.keys(stocks).map(key => {
          return stocks[key];
        });
        state.stocks = stocksArray
          .filter(stock => stock.IsTrading == true)
          .sort((a, b) => {
            return parseInt(a.SortOrder) - parseInt(b.SortOrder);
          })
          .slice(0, 99);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  RND_STOCKS(state) {}
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit();
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS");
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
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
};
