import * as types from '../types';

const state = {
  dragging: false
}

const mutations = {
  [types.DRAG_ENTER] (state) {
    state.dragging = true
  },
  [types.DRAG_LEAVE] (state) {
    state.dragging = false
  }
}

export default {
  state,
  mutations
}
