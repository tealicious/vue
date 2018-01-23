import * as types from '../types';

const state = {
  counter: 0,
  clicks: 0
};

const getters = {
  singleCounter: state => {
    return state.counter;
    return state.clicks;
  },
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
    return state.clicks;
  },
  tripleCounter: state => {
    return state.counter * 3;
    return state.clicks;
  },
  [types.CLICK_COUNTER]: state => {
    return state.clicks + ' total clicks!';
  }
};

const mutations = {
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
  }
};

const actions = {
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
  }
};

export default {
  state, // data
  getters, // computed properties (data changed and returned when called)
  mutations, // synchronous methods to change state
  actions // asynchronous mutations
}