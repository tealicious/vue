const state = {
    counter: 0
}

const getters = {
    singleCounter(state) {
        return state.counter;
    },
    doubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter(state) {
        return state.counter + '  clicks';
    }
}

const mutations = {
    increment: (state, payload) => {
        if (payload) {
            state.counter += payload
        } else {
            state.counter++
        }
    },
    decrement: (state, payload) => {
        if (payload) {
            state.counter -= payload
        } else {
            state.counter--
        }
    }
}

const actions = {
    delayedIncrement: ({
        commit
    }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by)
        }, payload.duration)
    },
    delayedDecrement: ({
        commit
    }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by)
        }, payload.duration)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}