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

  assignToPromises = coinArray => {
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
}
