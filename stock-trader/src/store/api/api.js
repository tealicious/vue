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
}
