import PortfolioApi from "../api/portfolioapi";
const portfolioApi = new PortfolioApi();
function initialState() {
  return {
    funds: 100000,
    portfolio: [],
    hasLoaded: false
  };
}
const state = initialState();

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
  RESET_PORTFOLIO(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  },
  BUY_STOCK(state, { stockId, stockName, Quantity, stockPrice }) {
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
    if (data.portfolio) {
      state.portfolio = data.portfolio;
    }
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
  loadPortfolio({ commit, dispatch, getters }) {
    return new PortfolioApi().fetchPortfolio(
      getters.user.uid,
      portfolio => {
        // successCallback
        commit("LOAD_PORTFOLIO", portfolio);
      },
      fail => {
        // failureCallback
        dispatch("savePortfolio").then(() => {
          dispatch("loadPortfolio");
        });
      }
    );
  },
  savePortfolio({ state, getters }) {
    const currentPortfolio = {
      funds: state.funds,
      portfolio: state.portfolio
    };
    return new PortfolioApi().savePortfolio(
      getters.user.uid,
      currentPortfolio,
      success => {
        console.log(success);
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
