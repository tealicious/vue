import axios from "axios";
import {cryptoCompare} from "../main";
import Api from './api';

export default class CoinApi extends Api {
    getCoins = (callback, errorCallback) => {
        axios.get(`${cryptoCompare}/all/coinlist`)
            .then((response) => callback(response))
            .catch((error) => errorCallback(error));
    };

    getCoin = (coin, callback, errorCallback) => {
        axios.get(`${cryptoCompare}/price?fsym=${coin}&tsyms=USD`)
            .then((response) => callback(response))
            .catch((error) => errorCallback(error));
    };
}