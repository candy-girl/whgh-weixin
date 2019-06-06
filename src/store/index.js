import Vue from 'vue'
import Vuex from 'vuex'
import gloabal from './modules/gloabal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gloabal
  }
})
