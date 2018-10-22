import PortfolioApi from "../api/portfolioapi";
import HomeApi from "../api/homeapi";
const portfolioApi = new PortfolioApi();

const state = {
  funds: 100000,
  portfolio: [],
  hasLoaded: false
};

const getters = {
  funds(state) {
    return state.funds;
  },
  portfolio(state, getters) {
    return portfolioApi.setPortfolio(state.portfolio, getters.stocks);
  },
  portfolioValue(state, getters) {
    return portfolioApi.setPortfolioValue(getters.stocks, state.portfolio);
  },
  hasLoaded() {
    return state.hasLoaded;
  }
};

const mutations = {
  BUY_STOCK(state, { stockId, Quantity, stockPrice }) {
    const record = state.portfolio.find(element => element.Id == stockId);
    if (record) {
      record.Quantity += parseInt(Quantity);
    } else {
      state.portfolio.push({
        Id: stockId,
        Name: stockName,
        Quantity: parseInt(Quantity)
      });
    }
    state.funds -= stockPrice * Quantity;
  },
  SELL_STOCK(state, { stockId, Quantity, stockPrice }) {
    const record = state.portfolio.find(element => element.Id == stockId);
    if (record.Quantity > Quantity) {
      record.Quantity -= parseInt(Quantity);
    } else {
      state.portfolio.splice(state.portfolio.indexOf(record), 1); //remove stock if all sold
    }
    state.funds += stockPrice * Quantity;
  },
  LOAD_PORTFOLIO(state, data) {
    state.funds = data.funds;
    state.portfolio = data.portfolio;
    setTimeout(() => {
      state.hasLoaded = true;
    }, 500);
  }
};

const actions = {
  sellStock({ commit, dispatch }, order) {
    commit("SELL_STOCK", order);
    dispatch("savePortfolio");
  },
  loadPortfolio({ commit }) {
    return new PortfolioApi().fetchPortfolio(
      portfolio => {
        // successCallback
        commit("LOAD_PORTFOLIO", portfolio);
      },
      fail => {
        // failureCallback
        alert(fail);
      }
    );
  },
  savePortfolio({ state }) {
    const currentPortfolio = {
      funds: state.funds,
      portfolio: state.portfolio
    };
    return new PortfolioApi().savePortfolio(
      currentPortfolio,
      success => {
        console.log(success);
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
