import request from '../request'
import * as CONFIG from '../config'

// initial state
const state = {
  zsyzDetail:{},
  hdxxDetail:[]
}

// getters
const getters = {

}

// actions
const actions = {
  //招商引资点击详情页
  getZsyzDetail ({commit, state}, opt = {}) {
    commit('setZsyzDetail',opt)
  },
  //航道信息详情
  getHdxxDetail({commit, state}, opt = {}) {
    console.log(22,opt)
    commit('setHdxxDetail',opt)
  }
}

// mutations
const mutations = {
  setZsyzDetail(state,data){
    state.zsyzDetail = data.data
  },
  setHdxxDetail(state,data){
    state.hdxxDetail = data.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
