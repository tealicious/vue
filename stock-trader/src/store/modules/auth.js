import firebase from "firebase";
import AuthApi from "../api/authapi";
function initialState() {
  return {
    user: null
  };
}

const state = initialState();

const getters = {
  user(state) {
    return state.user;
  }
};

const mutations = {
  RESET_USER(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  },
  SIGN_IN(state, user) {
    state.user = user;
    return user.email;
  }
};

const actions = {
  register({ commit }, loginInfo) {
    return new Promise((resolve, reject) => {
      return new AuthApi().register(
        loginInfo,
        success => {
          resolve();
        },
        fail => {
          reject(fail);
        }
      );
    });
  },
  login({ commit }, loginInfo) {
    return new Promise((resolve, reject) => {
      return new AuthApi().signIn(
        loginInfo,
        success => {
          commit("SIGN_IN", success);
          resolve();
        },
        fail => {
          reject(fail);
        }
      );
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
