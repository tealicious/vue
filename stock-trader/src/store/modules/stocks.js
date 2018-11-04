import CoinApi from "../api/coinapi";
function initialState() {
  return {
    stocks: [],
    callsStocks: 0,
    callsHistories: 0
  };
}
const state = initialState();

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
  }
};

const mutations = {
  RESET_STOCKS(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  },
  SET_STOCKS(state, stocks) {
    state.stocks = [...stocks];
  },
  SET_COIN_PRICES(state, responseCoins) {
    const updatedCoinListClone = new CoinApi().assignPrices(
      state.stocks,
      responseCoins
    );
    state.stocks = [...updatedCoinListClone];
    //Vue.set(state, "stocks", [...updatedCoinListClone]);
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
        return fail;
      }
    );
  },
  setCoinPrices: ({ state, commit }) => {
    const resolvedCoins = new CoinApi().assignPricesToPromises(state.stocks);
    return new CoinApi().resolveMultiplePromises(
      resolvedCoins.promises,
      success => {
        commit("SET_COIN_PRICES", resolvedCoins.coins);
      },
      fail => {
        return fail;
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
        return fail;
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
