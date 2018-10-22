import axios from "axios";
export default class Api {
  get = (config = {}) => {
    return axios.get(`${this.baseUrl}${config.resource}`).then(response => {
      return response;
    });
  };

  put = (config = {}) => {
    return axios
      .put(`${this.baseUrl}${config.resource}`, config.payload)
      .then(response => {
        return response;
      });
  };

  assignMultiplePromises = coinArray => {
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

  resolveMultiplePromises = (promises, successCallback, failureCallback) => {
    return new Promise((resolve, reject) => {
      Promise.all(promises)
        .then(function() {
          successCallback();
          resolve();
        })
        .catch(() => {
          failureCallback(reject);
        });
    });
  };
}
