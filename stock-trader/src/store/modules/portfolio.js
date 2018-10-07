const state = {
  funds: 100000,
  portfolio: []
};

const mutations = {
  BUY_STOCK(state, { stockId, Quantity, stockPrice }) {
    const record = state.portfolio.find(element => element.Id == stockId);
    if (record) {
      record.Quantity += parseInt(Quantity);
    } else {
      state.portfolio.push({
        Id: stockId,
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
  LOAD_PORTFOLIO(state, { funds, portfolio }) {
    state.funds = funds;
    state.portfolio = portfolio;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  portfolio(state, getters) {
    return state.portfolio
      .map(portfolioStock => {
        const stocks = Object.values(getters.stocks);
        const record = stocks.find(element => element.Id == portfolioStock.Id);
        record.Quantity = portfolioStock.Quantity;
        return record;
      })
      .sort((a, b) => {
        return parseInt(a.SortOrder) - parseInt(b.SortOrder);
      });
  },
  funds(state) {
    return state.funds;
  },
  portfolioValue(state, getters) {
    let value = 0;
    const portfolio = state.portfolio.map(portfolioStock => {
      const stocks = Object.values(getters.stocks);
      const record = stocks.find(element => element.Id == portfolioStock.Id);
      record.Quantity = portfolioStock.Quantity;
      return record;
    });
    return (
      Math.round(
        portfolio.reduce((a, b) => {
          return a + b.Price * b.Quantity;
        }, 0) * 100
      ) / 100
    );
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
