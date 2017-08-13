import { 
  ADD_SUB_FOR,
  GET_SUB_FOR,
  RESET_SUB_FOR ,

} from '../types'

const state = {
  // vidHash : {
  //   'eng' : [{sub},{sub}, {sub}]
  //   'fre' : [{sub},{sub}, {sub}]
  // }
  list : {},
}


const mutations = {
  [ADD_SUB_FOR] (state, payload) {
    const {hash, lang, subs} = payload
    if(!state.list.hasOwnProperty(hash))
      state.list[hash] = {} 

    state.list[hash][lang] = subs 
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
