import axios from "axios";
import { cryptoCompare } from "../../main";
import CoinApi from "../api/coinapi";

const state = {
  stocks: null,
  calls: 0
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = Object.assign({}, stocks);
    state.calls += 1;
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  setStocks: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const coinApi = new CoinApi();
      axios.get(`${cryptoCompare}/all/coinlist`).then(function(response) {
        const orderedCoins = coinApi.parseCoinList(response);
        const resolvedCoins = coinApi.assignToPromises(orderedCoins);
        Promise.all(resolvedCoins.promises).then(function() {
          commit("SET_STOCKS", resolvedCoins.coins);
          resolve();
        });
      });
    });
  }
};
function compare(a, b) {
  if (a.SortOrder < b.SortOrder) return -1;
  if (a.SortOrder > b.SortOrder) return 1;
  return 0;
}
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
