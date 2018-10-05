import axios from "axios";

const cryptoCompare = "https://min-api.cryptocompare.com/data";
const state = {
  stocks: null
};

const mutations = {
  SET_STOCKS(state) {
    axios.get(`${cryptoCompare}/all/coinlist`).then(function(response) {
      const stocks = response.data.Data;
      const stocksArray = Object.keys(stocks)
        .map(key => {
          return stocks[key];
        })
        .filter(stock => stock.IsTrading == true)
        .sort((a, b) => {
          return parseInt(a.SortOrder) - parseInt(b.SortOrder);
        })
        .slice(0, 99);
      const setPrices = new Promise(function(resolve) {
        for (let stock of stocksArray) {
          axios
            .get(`${cryptoCompare}/price?fsym=${stock.Symbol}&tsyms=USD`)
            .then(function(response) {
              stock.Price = response.data.USD;
            });
        }
        resolve();
      });
      setPrices.then(function() {
        state.stocks = stocksArray;
      });
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
