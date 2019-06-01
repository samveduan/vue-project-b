import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setRouting: false
  },
  getters: {

  },
  mutations: {
    setRouting: function(state, value){
      state.setRouting = value;
    }
  },
  actions: {

  }
})
