import CoinApi from "../api/coinapi";

const state = {
  stocksAsArray: [],
  stocks: [],
  callsStocks: 0,
  histories: [],
  callsHistories: 0
};

const getters = {
  stocks: state => {
    return state.stocks.sort((a, b) => {
      return parseInt(a.SortOrder) - parseInt(b.SortOrder);
    });
  },
  callsStocks: state => {
    return state.callsStocks;
  },
  callsHistories: state => {
    return state.callsHistories;
  },
  histories: state => {
    return state.histories.sort((a, b) => {
      return parseInt(a.SortOrder) - parseInt(b.SortOrder);
    });
  }
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = [...stocks];
  },
  SET_STOCK_PRICES(state, responseCoins) {
    const updatedCoinListClone = new CoinApi().assignPrices(
      state.stocks,
      responseCoins
    );
    state.stocks = [...updatedCoinListClone];
    state.callsStocks += 1;
  },
  SET_COIN_HISTORIES(state, histories) {
    const updatedCoinListClone = new CoinApi().assignHistories(
      state.stocks,
      histories
    );
    state.stocks = [...updatedCoinListClone];
    state.callsHistories += 1;
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
    const resolvedCoins = new CoinApi().assignPricesToPromises(state.stocks);
    return new CoinApi().resolveMultiplePromises(
      resolvedCoins.promises,
      success => {
        commit("SET_STOCK_PRICES", resolvedCoins.coins);
      },
      fail => {
        alert(fail);
      }
    );
  },
  setHistoricalPrices: ({ state, commit }) => {
    const resolvedHistories = new CoinApi().assignHistoryToPromises(
      state.stocks
    );
    return new CoinApi().resolveMultiplePromises(
      resolvedHistories.promises,
      success => {
        commit("SET_COIN_HISTORIES", resolvedHistories.coins);
      },
      fail => {
        alert(fail);
      }
    );
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
