import { fireBase } from "../../main";
import Api from "./api";
import axios from "axios";
export default class PortfolioApi extends Api {
  constructor() {
    super();
    this.baseUrl = fireBase;
  }
  get = (config = {}) => {
    return axios.get(`${this.baseUrl}${config.resource}`).then(response => {
      return response;
    });
  };
  fetchPortfolio = (successCallback, failureCallback) => {
    return this.get({ resource: "data.json" })
      .then(response => successCallback(response.data))
      .catch(error => failureCallback(error));
  };
  loadPortfolio = ({ commit }) => {
    return new PortfolioApi().fetchPortfolio(
      portfolio => {
        //failureCallback
        commit("LOAD_PORTFOLIO", portfolio);
      },
      fail => {
        // failureCallback
        alert(fail);
      }
    );
  };
}
