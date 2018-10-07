import axios from "axios";
import { fireBase } from "../main";
export const loadData = ({ commit }) => {
  axios.get(`${fireBase}data.json`).then(res => {
    console.log(res.data.portfolio);
    commit("LOAD_PORTFOLIO", res.data.portfolio);
  });
};
