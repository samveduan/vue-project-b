import Vue from '_vue@2.6.10@vue/types'
import Vuex from '_vuex@3.1.0@vuex/types'
import collection from './modules/collection'
import footerStatus from './modules/footerStatus'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collection,
    footerStatus
  }
})
