import axios from "axios";
const cryptoCompare = "https://min-api.cryptocompare.com/data";
const state = {
  stocks: null,
  calls: 0
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
        .slice(0, 33);
      const promises = [];
      for (let stock of stocksArray) {
        promises.push(
          axios
            .get(`${cryptoCompare}/price?fsym=${stock.Symbol}&tsyms=USD`)
            .then(function(response) {
              stock.Price = response.data.USD;
            })
        );
      }
      Promise.all(promises).then(function() {
        state.stocks = Object.assign({}, stocksArray);
        state.calls += 1;
      });
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  setStocks: ({ commit }) => {
    commit("SET_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
  calls: state => {
    return state.calls;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
