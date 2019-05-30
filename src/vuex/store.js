import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let myStore = new Vuex.Store({
  state: {
    loginstatus: sessionStorage.getItem('loginstatus') || false
  },
  getters: {

  },
  mutations: {
    setRouting (state, loginstatus) {
      state.loginstatus = loginstatus
      sessionStorage.setItem('loginstatus', loginstatus)
    }
  },
  actions: {

  }
});

export default myStore
