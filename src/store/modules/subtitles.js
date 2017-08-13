import { 
  ADD_FETCHED_SUB_FOR,
  GET_FETCHED_SUB_FOR,
  RESET_FETCHED_SUB_FOR ,
  
  ADD_DOWN_SUB_FOR,
  GET_DOWN_SUB_FOR,
  RESET_DOWN_SUB_FOR ,
  
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

  [GET_FETCHED_SUB_FOR] (state, payload) {
    const {hash, lang} = payload
    const containsLang = lang && (state.fetched[hash]||{}).hasOwnProperty(lang)
    if(!state.fetched.hasOwnProperty(hash) || !containsLang  )
      return null
    
    const subs = state.fetched[hash]
    return (subs && containsLang ) ? subs[lang] : subs;
  },


  [RESET_FETCHED_SUB_FOR] (state, hash) {
    delete state.fetched[hash]  // Delete the reference
    state[hash] = {}
  },

  /**
   * DOWNLOADED
   */
  
  [ADD_DOWN_SUB_FOR] (state, payload) {
    const {hash, lang, subPath} = payload
    if(!state.downloaded.hasOwnProperty(hash))
      state.downloaded[hash] = {} 

    state.downloaded[hash][lang] = subPath
  },

  [GET_DOWN_SUB_FOR] (state, payload) {
    const {hash, lang} = payload
    const containsLang = lang && (state.downloaded[hash]||{}).hasOwnProperty(lang)
    if(!state.downloaded.hasOwnProperty(hash) || !containsLang)
      return null
    
    const subs = state.downloaded[hash]
    return (subs && containsLang ) ? subs[lang] : subs;
  },


  [RESET_DOWN_SUB_FOR] (state, hash) {
    delete state.downloaded[hash]  // Delete the reference
    state[hash] = {}
  },
  
  

}



export default {
  state,
  mutations
}
