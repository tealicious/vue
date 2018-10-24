import { cryptoCompare } from "../../main";
import Api from "./api";
export default class CoinApi extends Api {
  constructor() {
    super();
    this.baseUrl = cryptoCompare;
  }

  fetchCoins = (successCallback, failureCallback) => {
    return this.get({ resource: "/all/coinlist" })
      .then(response => this.parseCoinList(response))
      .then(orderedCoinList => successCallback(orderedCoinList))
      .catch(error => failureCallback(error));
  };

  parseCoinList = response => {
    const stocks = response.data.Data;
    return Object.keys(stocks)
      .map(key => {
        return stocks[key];
      })
      .filter(stock => stock.IsTrading == true)
      .sort((a, b) => {
        return parseInt(a.SortOrder) - parseInt(b.SortOrder);
      })
      .slice(0, 33);
  };

  assignPrices = (stocks, responseCoin) => {
    console.log(stocks[0].Price, responseCoin[0].Price);
    const stocksClone = [...stocks];
    const responseCoinClone = [...responseCoin];
    return stocksClone.map(stock => {
      const record = responseCoinClone.find(element => element.Id == stock.Id);
      stock.Price = record.Price;
      return stock;
    });
  };

  assignHistories = (stocks, histories) => {
    const stocksClone = [...stocks];
    const historiesClone = [...histories];
    return historiesClone.map(history => {
      const record = stocksClone.find(element => element.Id == history.Id);
      record.History = history.History;
      return record;
    });
  };

  assignPricesToPromises = coinArray => {
    const resolvedCoins = {
      promises: [],
      coins: []
    };
    for (let coin of coinArray) {
      resolvedCoins.promises.push(
        new Promise((resolve, reject) => {
          this.get({ resource: `/price?fsym=${coin.Symbol}&tsyms=USD` })
            .then(response => {
              coin.Price = response.data.USD;
              resolvedCoins.coins.push(coin);
              resolve();
            })
            .catch(() => {
              reject();
            });
        })
      );
    }
    return resolvedCoins;
  };

  assignHistoryToPromises = coinArray => {
    const resolvedCoins = {
      promises: [],
      coins: []
    };
    for (let coin of coinArray) {
      resolvedCoins.promises.push(
        new Promise((resolve, reject) => {
          this.get({
            resource: `/histohour?fsym=${
              coin.Symbol
            }&tsym=USD&limit=5&aggregate=3&e=CCCAGG`
          })
            .then(response => {
              const newCoin = {
                Id: coin.Id,
                History: null
              };
              newCoin.History = response.data.Data;
              resolvedCoins.coins.push(newCoin);
              resolve();
            })
            .catch(() => {
              reject();
            });
        })
      );
    }
    return resolvedCoins;
  };
}
