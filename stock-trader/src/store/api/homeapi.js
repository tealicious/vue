import { cryptoCompare } from "../../main";
import Api from "./api";
export default class CoinApi extends Api {
  constructor() {
    super();
    this.baseUrl = cryptoCompare;
  }

  assignHistoryToPromises = coinArray => {
    const resolvedCoins = {
      promises: [],
      coins: []
    };
    for (let coin of coinArray) {
      resolvedCoins.promises.push(
        new Promise((resolve, reject) => {
          this.get({
            resource: `/histominute?fsym=${
              coin.Symbol
            }&tsym=USD&limit=10&aggregate=3&e=CCCAGG`
          })
            .then(response => {
              console.log(response);
              coin.History = response.data;
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
