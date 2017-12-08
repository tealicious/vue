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
      state.idToken = userData.token,
        state.userId = userData.userId
    },
    storeLocalUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null,
        state.userId = null
    }
  },
  actions: {
    signup({
      commit, // commit mutation methods
      dispatch // dispatch action methods
    }, authData) {
      console.log(`auth user data: ${authData}`);
      axios.post("/signupNewUser?key=AIzaSyBZluWBHBrwDsMsum03zQNmh_x_DLAA-ck", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }) // post the object to sign user up
        .then(res => {
          console.log(res.data) // get a response with auth token in it
          commit('authUser', { // commit authUser mutation to set our current, local user ID and token
            token: res.data.idToken, // pass the new user token
            userId: res.data.localId // pass the new user unique id
          })
        })
      dispatch('storeUser', authData) // dispatch storeUser action which will add our user to the firebase users database
        .catch(error => console.log(error));
    },
    login({
      commit
    }, authData) {
      axios
        .post("/verifyPassword?key=AIzaSyBZluWBHBrwDsMsum03zQNmh_x_DLAA-ck", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res.data)
          commit('authUser', {
            token: res.data.idToken, // pass the new user token
            userId: res.data.localId
          })
          router.replace("/dashboard")
        })
        .catch(error => console.log(error));
    },
    logout({
      commit
    }) {
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
          const users = []; // begin converting the json object to an array of users
          for (let key in data) {
            // key = object key
            const user = data[key]; // for each object in the data json object, assign it to a variable and reconstruct it as an indiviual object
            user.id = key; // add new property
            users.push(user); // reconstruct our own array
            commit('storeLocalUser', users[0]);
          }
          this.email = users[0].email; //assign one to the email key in this.data
          console.log(data, users);
        })
        .catch(error => console.log(error));
    }
  }
})