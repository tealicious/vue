import axios from "axios";
import { fireBase } from "../main";

export const loadPortfolio = ({ commit }) => {
  axios.get(`${fireBase}data.json`).then(res => {
    commit("LOAD_PORTFOLIO", res.data);
  });
};
