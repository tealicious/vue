import CoinApi from "../api/coinapi";

const state = {
  stocksAsArray: [],
  stocks: [],
  calls: 0
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocksAsArray = stocks;
    state.calls += 1;
  },
  SET_STOCK_PRICES(state, stocks) {
    state.stocks = Object.assign([], stocks);
  }
};

const actions = {
  buyStock: ({ commit, dispatch }, order) => {
    commit("BUY_STOCK", order);
    dispatch("savePortfolio");
  },
  setStocks: ({ commit }) => {
    return new CoinApi().fetchCoins(
      // successCallback
      orderedCoins => {
        commit("SET_STOCKS", orderedCoins);
      },
      // failureCallback
      fail => {
        alert(fail);
      }
    );
  },
  setStockPrices: ({ state, commit }) => {
    const resolvedCoins = new CoinApi().assignToPromises(state.stocksAsArray);
    Promise.all(resolvedCoins.promises).then(function() {
      commit("SET_STOCK_PRICES", resolvedCoins.coins);
    });
  }
};
const getters = {
  stocks: state => {
    return state.stocks.sort((a, b) => {
      return parseInt(a.SortOrder) - parseInt(b.SortOrder);
    });
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
