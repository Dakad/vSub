import { 
  ADD_SUB_FOR, 
  RESET_SUB_FOR ,

} from '../types'

const state = {
  list : {},
}


const mutations = {
  [ADD_SUB_FOR] (state, hash, lang, sub) {
    state.list[hash][lang] = sub 
  },

  [RESET_SUB_FOR] (state, hash) {
    delete state.list[hash]  // Delete the reference
    state[hash] = {}
  }

}



export default {
  state,
  mutations
}
