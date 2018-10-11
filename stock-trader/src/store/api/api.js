import axios from "axios";
export default class Api {
  get = (config = {}) => {
    return axios.get(`${this.baseUrl}${config.resource}`).then(response => {
      return response;
    });
  };
}
