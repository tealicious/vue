import axios from "axios";
import { cryptoCompare } from "../../main";
export default class api {
  fetchCoins = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${cryptoCompare}/all/coinlist`)
        .then(response => {
          resolve();
          return response;
        })
        .catch(error => {
          reject();
          console.log(error);
        });
    });
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
          axios
            .get(`${cryptoCompare}/price?fsym=${coin.Symbol}&tsyms=USD`)
            .then(function(response) {
              coin.Price = response.data.USD;
              resolvedCoins.coins.push(coin);
              resolve();
            });
        })
      );
    }
    return resolvedCoins;
  };
}
