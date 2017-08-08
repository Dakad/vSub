import * as types from '../types';

const state = {
  dropped: [],
  summaryList : [],
  current: null
}


const mutations = {
  [types.DROPPED_Q] (state, files) {
    state.queue = Array.from(files)
  },
  [types.RESET_DROPPED_Q] (state) {
    state.queue = []
  },
  [types.SHIFT_DROPPED_Q] (state) {
    state.current = state.queue.shift()
  },
  
  [types.ADD_SUMMARY] (state, summary) {
    state.summaryList.push(summary)
  },
  [types.RESET_SUMMARY_LIST] (state, summary) {
    state.summaryList = []
  }
}



export default {
  state,
  mutations
}
