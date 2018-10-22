import CoinApi from "../api/coinapi";

const state = {
  stocksAsArray: [],
  stocks: [],
  callsStocks: 0
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocksAsArray = stocks;
    state.callsStocks += 1;
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
    const resolvedCoins = new CoinApi().assignPricesToPromises(
      state.stocksAsArray
    );
    return new CoinApi().resolveMultiplePromises(
      resolvedCoins.promises,
      success => {
        commit("SET_STOCK_PRICES", resolvedCoins.coins);
      },
      fail => {
        alert(fail);
      }
    );
  }
};
const getters = {
  stocks: state => {
    return state.stocks.sort((a, b) => {
      return parseInt(a.SortOrder) - parseInt(b.SortOrder);
    });
  },
  calls: state => {
    return state.callsStocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
