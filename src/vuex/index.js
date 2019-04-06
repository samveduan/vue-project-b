import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Jay',
    age: 38
  },
  getters: {
    getAge: function(state){
      return state.age + "岁";
    }
  },
  mutations: {
    addAge: function(state, value){
      state += value;
    },
    addAgeAnsyc: function(state, value){
      state.age += value;
    }
  },
  actions: {
    add: function(context, value){
      setTimeout(function(){
        context.commit("addAgeAnsyc", value);
      }, 1000);
    }
  }
})
