import HomeApi from "../api/homeapi";

const state = {
  histories: []
};
const getters = {
  histories: state => {
    return state.histories.sort((a, b) => {
      return parseInt(a.SortOrder) - parseInt(b.SortOrder);
    });
  }
};
const mutations = {
  SET_COIN_HISTORIES(state, coins) {
    state.histories = Object.assign([], coins);
  }
};
const actions = {
  setHistoricalPrices: ({ getters, commit }) => {
    const resolvedHistories = new HomeApi().assignHistoryToPromises(
      getters.portfolio
    );
    return new HomeApi().resolveMultiplePromises(
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
