import Vue from './vue.common.dev.js';
import Vuex from './vuex.esm.js';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
    decrementAsync(context) {
      setTimeout(() => {
        context.commit('decrement');
      }, 1000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
// module.exports = store;
export default store;
