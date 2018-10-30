import { fireBaseUrl } from "../../main";
import Api from "./api";
export default class PortfolioApi extends Api {
  constructor() {
    super();
    this.baseUrl = fireBaseUrl;
  }

  fetchPortfolio = (successCallback, failureCallback) => {
    return this.get({ resource: "data.json" })
      .then(response => successCallback(response.data))
      .catch(error => failureCallback(error));
  };

  savePortfolio = (currentPortfolio, successCallback, failureCallback) => {
    return this.put({ resource: "data.json", payload: currentPortfolio })
      .then(response => successCallback(response))
      .catch(error => failureCallback(error));
  };

  assignPriceAndQuantity = (portfolioStock, stocks) => {
    return portfolioStock.map(portfolioStock => {
      const currentStocks = Object.values(stocks);
      const record = currentStocks.find(
        element => element.Id == portfolioStock.Id
      );
      record.Quantity = portfolioStock.Quantity;
      return record;
    });
  };

  setPortfolio = (portfolio, stocks) => {
    if (stocks.length == 0 || !portfolio) {
      return;
    }
    return this.assignPriceAndQuantity(portfolio, stocks).sort((a, b) => {
      return parseInt(a.SortOrder) - parseInt(b.SortOrder);
    });
  };

  setPortfolioValue = (stocks, portfolio) => {
    if (stocks.length == 0 || !portfolio) {
      return;
    }
    const priceAndQuantity = this.assignPriceAndQuantity(portfolio, stocks);
    return (
      Math.round(
        priceAndQuantity.reduce((a, b) => {
          return a + b.Price * b.Quantity;
        }, 0) * 100
      ) / 100
    );
  };
}
