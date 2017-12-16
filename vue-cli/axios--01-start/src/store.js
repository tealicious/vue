import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./js/axios-auth"
import globalAxios from 'axios'
import router from "./router.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null, // core auth data needed for firebase signup and login rest api
    userId: null, // core auth data needed for firebase signup and login rest api
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken != null; //return true if user is logged in
    }
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeLocalUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
      state.user = null
    },
    saveToLocalStorage({
      state
    }, loginInfo) {
      const now = new Date();
      const expirationDate = new Date(now.getTime() + loginInfo.expiresIn * 1000);
      localStorage.setItem('token', loginInfo.idToken) // save the user security token in local storage
      localStorage.setItem('userId', loginInfo.localId)
      localStorage.setItem('expirationDate', expirationDate)
    },
  },
  actions: {
    setLogoutTimer({
      commit,
      dispatch
    }, expirationTime) {
      setTimeout(() => {
        dispatch('logout')
      }, expirationTime * 1000)
    },
    signup({
      commit, // commit mutation methods
      dispatch // dispatch action methods
    }, authData) {
      axios.post("/signupNewUser?key=AIzaSyBZluWBHBrwDsMsum03zQNmh_x_DLAA-ck", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }) // post the object to sign user up
        .then(res => {
          //console.log(res.data) // get a response with auth token in it
          commit('authUser', { // commit authUser mutation to set our current, local user ID and token
            token: res.data.idToken, // pass the new user token
            userId: res.data.localId, // pass the new user unique id
          })
          setTimeout(() => {
            router.replace("/dashboard")
          }, 500);
          authData.uid = res.data.localId;
          const loginInfo = {
            idToken: res.data.idToken,
            localId: res.data.localId,
            expiresIn: res.data.expiresIn
          }
          dispatch('storeUser', authData)
          commit('saveToLocalStorage', loginInfo)
          dispatch('storeUser', authData) // dispatch storeUser action which will add our user to the firebase users database
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error));
    },
    login({
      commit,
      dispatch
    }, authData) {
      axios
        .post("/verifyPassword?key=AIzaSyBZluWBHBrwDsMsum03zQNmh_x_DLAA-ck", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken, // pass the new user token
            userId: res.data.localId
          })
          router.replace("/dashboard")
          const loginInfo = {
            idToken: res.data.idToken,
            localId: res.data.localId,
            expiresIn: res.data.expiresIn
          }
          commit('saveToLocalStorage', loginInfo)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({
      commit,
      dispatch
    }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date();
      if (now <= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
      router.replace("/dashboard")
    },
    logout({
      commit
    }) {
      localStorage.clear();
      commit('clearAuthData')
      router.replace("/signin")
    },
    storeUser({
      commit,
      state
    }, userData) {
      if (!state.idToken) { // check if there is a current user
        return
      }
      globalAxios.post(`/users.json?auth=${state.idToken}`, userData) // post the user to users.json db
        .then(res => {
          console.log(res)
        })
        .catch(error => console.log(error));
    },
    fetchUser({
      commit,
      state
    }) {
      if (!state.idToken) {
        return
      }
      globalAxios.get(`/users.json?auth=${state.idToken}`)
        .then(response => {
          const data = response.data; //json object of users
          for (let key in data) {
            // key = object key
            const user = data[key]; // for each object in the data json object, assign it to a variable and reconstruct it as an indiviual object
            user.id = key; // add new property
            if (user.uid == state.userId) {
              commit('storeLocalUser', user);
            }
          }
        })
        .catch(error => console.log(error));
    }
  }
})