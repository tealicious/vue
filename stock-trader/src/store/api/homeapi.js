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
            resource: `/histohour?fsym=${
              coin.Symbol
            }&tsym=USD&limit=5&aggregate=3&e=CCCAGG`
          })
            .then(response => {
              coin.History = response.data.Data;
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
