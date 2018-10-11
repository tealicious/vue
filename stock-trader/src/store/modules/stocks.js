import CoinApi from '../../api/coinApi';

const state = {
    stocks: null,
    calls: 0
};

const mutations = {
    SET_STOCKS(state) {
        let coinApi = new CoinApi();
        coinApi.getCoins((response) => {
            const stocks = response.data.Data;
            let stocksArray = Object.keys(stocks)
                .map(key => stocks[key])
                .filter(stock => stock.IsTrading == true)
                .sort((a, b) => parseInt(a.SortOrder) - parseInt(b.SortOrder))
                .slice(0, 33);

            const promises = [];
            for (let stock of stocksArray) {
                promises.push(
                    new Promise((resolve, reject) => {
                        coinApi.getCoin(stock.Symbol, (response) => {
                            stock.Price = response.data.USD;
                            resolve()
                        }, (error) => reject(error))
                    })
                )
            }


            Promise.all(promises).then(function () {
                state.stocks = Object.assign({}, stocksArray);
                state.calls += 1;
            });
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit("BUY_STOCK", order);
    },
    setStocks: ({commit}) => {
        commit("SET_STOCKS");
    }
};

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
