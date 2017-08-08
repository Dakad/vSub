import * as types from '../types';

const state = {
  droppedQueue: [],
  summaryList : [],
  current: null
}


const mutations = {
  [types.DROPPED_Q] (state, files) {
    state.droppedQueue = Array.from(files)
  },
  [types.RESET_DROPPED_Q] (state) {
    state.droppedQueue = []
  },
  [types.SHIFT_DROPPED_Q] (state) {
    state.current = state.droppedQueue.shift()
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
