const state = {
  funds: 100000,
  portfolioStocks: []
};
const mutations = {
  buyStock(state, { // this is the payload from the stock.vue file (where we can buy)
    id,
    price,
    quantity
  }) {
    const record = state.portfolioStocks.find(element => {
      return element.id == id // check against our portfolio, does the stock exist yet?
    });
    if (record) { // if we own this alread....
      record.quantity += quantity; // add to the maount we own
    } else { // if we don't
      state.portfolioStocks.push({ // push it into the portfolio stocks array
        id: id, // give it its ID for reference later
        quantity: quantity // give it the amount we purchase
        // we don't assign a price because the marklet determines the price of a stock, not our portfolio!
      });
      state.funds -= price * quantity; //pay for this
      console.log(state.portfolioStocks)
    }
  },
  sellStock(state, {
    id,
    price,
    quantity
  }) {
    const record = state.portfolioStocks.find(element => {
      return element.id == id // find the stock object by its id
    });
    if (record.quantity > quantity) { // if we have enough to sell
      record.quantity -= quantity // sell some and adjust the quantity to reflect
    } else { // if we're out
      state.portfolioStocks.splice(state.portfolioStocks.indexOf(record)); //make sure to remove it from the portfolio stocks array
    }
    state.funds += price * quantity; // get payed for this
  }
};

const actions = {
  sellStock: ({
    commit
  }, order) => {
    commit('sellStock', order);
  }
};

const getters = {
  portfolioStocks(state, getters) { //getters refers to overall store getters
    return state.portfolioStocks.map(portfolioStock => { // map the portfolio records array
      const record = getters.stocks.find(element => element.id == portfolioStock.id); // map against market stocks to create an array of hybrid objects (holding portfolio and market info)
      return {
        id: portfolioStock.id, //return id from portfolio
        quantity: portfolioStock.quantity, //return quantity from portfolio
        name: record.name, //return the name and the price from the market
        price: record.price_usd //return the name and the price from the market
      }
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
