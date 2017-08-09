

// -------------------------------------------------------------------
// Dependencies

// Import

// Built-in

// Mine
import * as types from './types';
import Config from '../config'
import OpenSubtitleService from '../services/open-subtitle'


// -------------------------------------------------------------------
// Properties

// Init the service with the config
const OpenSubService = new OpenSubtitleService(Config.openSubtitle)



// -------------------------------------------------------------------
// Exports


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
 * Process the first element in the dropped Q
 */
export const processQ = ({ commit, dispatch, getters, state }) => {
  commit(types.SHIFT_DROPPED_Q) // Shift file from dropped queue & set it as current
  const dropped = state.dropped.current
  
  if(!dropped) { // No dropped file
    return null; // Send ERROR instead of null
  }
  
  commit(types.START_LOADING)
  
  OpenSubService.hash(dropped)
    .then(({moviehash}) => OpenSubService.getDetails([moviehash]))
    .then(({data}) => {
      Object.keys(data).forEach(hash => dispatch('addSummary', data[hash]))

      // ? Remain some dropped files ?
      if(state.dropped.droppedQueue.length > 0){
        dispatch('processQ') // Re-exec the process
      }else{
        commit(types.END_LOADING)
      }
    })

}



export const addSummary = ({ commit }, summary) => {
  commit(types.ADD_SUMMARY, {
    hash : summary.MovieHash,
    IMBDId : summary.MovieImdbID,
    name: summary.MovieName,
    kind : summary.MovieKind,
    season: summary.SeriesSeason,
    episode: summary.SeriesEpisode,
    year: summary.MovieYear,
    subCount : summary.SubCount
  })
}