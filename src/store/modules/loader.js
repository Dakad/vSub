import {START_LOADING, END_LOADING} from '../types';


const state = {
  loading: false
}

const mutations = {
  [START_LOADING] (state) {
    state.loading = true
  },
  [END_LOADING] (state) {
    state.loading = false
  }
}

export default {
  state,
  mutations
}