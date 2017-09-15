import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    clicks: 0,
    value: 0
  },
  getters: {
    // like 'computed method' these will update the view automatically when state data in them changes
    // CAN BE MAPPED AND CALLED QUICKLY
    // Mutations must be synchronous (no setTimeouts)
    singleCounter: state => {
      return state.counter;
      return state.clicks;
    },
    doubleCounter: state => {
      return state.counter * 2;
      return state.clicks;
    },
    tripleCounter: state => {
      return state.counter * 3;
      return state.clicks;
    },
    stringCounter: state => {
      return state.clicks + ' total clicks!';
    },
    value: state => {
      return state.value;
    }
  },
  mutations: {
    // actual methods making changes to the stored state data
    // CAN BE MAPPED AND CALLED QUICKLY
    // Mutations must be synchronous (no setTimeouts)
    increment: (state, payload) => {
      state.counter++;
      state.clicks++;
    },
    decrement: (state, payload) => {
      state.counter--;
      state.clicks++;
    },
    clear: (state, payload) => {
      state.counter = 0;
      state.clicks = 0;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  // CAN BE MAPPED AND CALLED QUICKLY
  // actions CAN be asynchronous, and are created by passing a mutation into this structure
  actions: {
    asyncIncrement: ({
      commit
    }, payload) => {
      setTimeout(() => {
        commit('increment'); // payloads must be defined in the mutation method to be passed to the action (this can be done from a data property in the vue component)
      }, payload.duration);
    },
    asyncDecrement: ({
      commit
    }, payload) => {
      setTimeout(() => {
        commit('decrement');
      }, payload.duration);
    },
    asyncClear: ({
      commit
    }, payload) => {
      setTimeout(() => {
        commit('clear');
      }, payload.duration);
    },
    updateValue: ({
      commit
    }, payload) => {
      commit('updateValue', payload);
    }
  }
});
