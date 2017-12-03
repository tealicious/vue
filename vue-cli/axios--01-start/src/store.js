import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./js/axios-auth"
import globalAxios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null, // core auth data needed for firebase signup and login rest api
    userId: null // core auth data needed for firebase signup and login rest api
  },
  getters: {

  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token,
      state.userId = userData.userId
    }
  },
  actions: {
    signup({
      commit
    }, authData) {
      axios.post("/signupNewUser?key=AIzaSyBZluWBHBrwDsMsum03zQNmh_x_DLAA-ck", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res)
          commit('authUser', { // commit authUser mutation and pass the following object into the userData parameter
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch(error => console.log(error));
    },
    login({commit}, authData) {
      axios
        .post("/verifyPassword?key=AIzaSyBZluWBHBrwDsMsum03zQNmh_x_DLAA-ck", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    },
    storeUser({commit}, userData) {
      globalAxios.post('/users.json', userData)
      .then (res => {
        console.log(res)
      })
      .catch(error => console.log(error));
    },
    fetchUser({
      commit
    }) {
      axios
      .get("/users.json")
      .then(response => {
        const data = response.data; //json object of users
        const users = []; // begin converting the json object to an array of users
        for (let key in data) {
          // key = object key
          const user = data[key]; // for each object in the data json object, assign it to a variable and reconstruct it as an indiviual object
          user.id = key; // add new property
          users.push(user); // reconstruct our own array
        }
        this.email = users[0].email; //assign one to the email key in this.data
        console.log(data, users);
      })
      .catch(error => console.log(error));
    }
  }
})