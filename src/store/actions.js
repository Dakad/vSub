import * as types from './types';



/**
 * Add error for a file
 * @param filename String name of the file that throw an error
 */
export const error = ({ commit }, filename) => {
  commit(types.ADD_ERROR, filename)
}



/**
 * Add a new subtitle to the list
 * @param files FileList dropped files
 */
export const handleFiles = function ({ commit, dispatch }, files){
  if (!files) {
    return null // TODO: Handle this error ?
  }
  commit(types.DROPPED_Q, files) // Add all dropped files to dropped queue
  dispatch('processQ') // Exec process for the files in queue
}


/**
 * Process the first element in the subtitle Q
 */
export const processQ = ({ commit, dispatch, getters, state }) => {
  commit(types.SHIFT_DROPPED_Q) // Shift file from dropped queue & set it as current
  const dropped = state.dropped.current
  
  if(!dropped) { // No dropped file
    return null; // Send ERROR instead of null
  }
  
  console.log('Handling dropped files .... ', dropped);


}