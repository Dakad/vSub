import { 
  ADD_FETCHED_SUB_FOR,
  RESET_FETCHED_SUB_FOR ,
  
  ADD_DOWNED_SUB_FOR,
  RESET_DOWNED_SUB_FOR ,
  
} from '../types'

const state = {
  // vidHash : {
  //   'eng' : [{sub},{sub}, {sub}]
  //   'fre' : [{sub},{sub}, {sub}]
  // }
  fetched : {},
  
  // vidHash : {
  //   'eng' : 'tmpPathToSubFile'
  //   'fre' : 'tmpPathToSubFile'
  //   'spa' : 'tmpPathToSubFile'
  // }
  downloaded : {}
}


const mutations = {
  [ADD_FETCHED_SUB_FOR] (state, payload) {
    const {hash, lang, subs} = payload
    if(!state.fetched.hasOwnProperty(hash))
      state.fetched[hash] = {} 

    state.fetched[hash][lang] = subs 
  },

  [RESET_FETCHED_SUB_FOR] (state, hash) {
    delete state.fetched[hash]  // Delete the reference
    state[hash] = {}
  },


  /**
   * DOWNLOADED
   */
  
  [ADD_DOWNED_SUB_FOR] (state, payload) {
    const {hash, lang, subPath} = payload
    if(!state.downloaded.hasOwnProperty(hash))
      state.downloaded[hash] = {} 

    state.downloaded[hash][lang] = subPath
  },

  [RESET_DOWNED_SUB_FOR] (state, hash) {
    delete state.downloaded[hash]  // Delete the reference
    state[hash] = {}
  },

}



export default {
  state,
  mutations
}
