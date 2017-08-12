import { 
  DROPPED_Q, 
  RESET_DROPPED_Q, 
  SHIFT_DROPPED_Q,
  ADD_SUMMARY,
  RESET_SUMMARY_LIST

} from '../types'

const state = {
  droppedQueue: [],
  summaryList : [],
  current: null
}


const mutations = {
  [DROPPED_Q] (state, files) {
    state.droppedQueue = Array.from(files)
  },
  [RESET_DROPPED_Q] (state) {
    state.droppedQueue = []
  },
  [SHIFT_DROPPED_Q] (state) {
    state.current = state.droppedQueue.shift()
  },
  
  [ADD_SUMMARY] (state, summary) {
    state.summaryList.push(summary)
  },
  [RESET_SUMMARY_LIST] (state, summary) {
    state.summaryList = []
  }
}



export default {
  state,
  mutations
}
