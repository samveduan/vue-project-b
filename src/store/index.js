import Vue from 'vue'
import Vuex from 'vuex'
import collection from './modules/collection'
import footerStatus from './modules/footerStatus'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collection,
    footerStatus
  }
})
