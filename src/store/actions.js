

// -------------------------------------------------------------------
// Dependencies

// Import

// Built-in

// Mine
import * as types from './types'
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
  return dispatch('processQ') // Exec process for the files in queue
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
  
  return OpenSubService.hash(dropped)
    .then(({moviehash}) => OpenSubService.getDetails([moviehash]))
    .then((res) => {
      const {statut, data} = res
      console.log(res);
      Object.keys(data)
        .filter(h => data[h] != undefined) // Only movie checked
        .forEach(hash => dispatch('addSummary', {
            summary : data[hash], 
            size    : dropped.size
        }))
      
      // ? Remain some dropped files ?
      if(state.dropped.droppedQueue.length > 0){
        return dispatch('processQ') // Re-exec the process
      }else{
        return commit(types.END_LOADING)
      }
    })
}


/**
 * Insert a new Summary in the list via commit. 
 */
export const addSummary = ({ commit }, payload) => {
  const {summary, size} = payload
  console.log(payload);
  commit(types.ADD_SUMMARY, {
    size,
    hash    : summary.MovieHash,
    IMBDId  : summary.MovieImdbID,
    name    : summary.MovieName,
    kind    : summary.MovieKind,
    season  : summary.SeriesSeason,
    episode : summary.SeriesEpisode,
    year    : summary.MovieYear,
    subCount: summary.SubCount,
    hasSub  : false, // ? Has some downloaded sub ?
  })
}



/**
 * Fetch list of subtitle for the select summary
 *
 */
export const fetchSubtitles = function ({commit, dispatch, getters, state}, vidHash){
  const { size, IMBDId } = getters.getSummary(vidHash)
  console.log(vidHash, vidHash, size, IMBDId);

  const params = Object.keys(state.langs).map(lang => ({
      sublanguageid : lang,
      moviehash : vidHash,
      moviebytesize : size,
      limit : 10,
  }))
  
  return OpenSubService.getSubtitles(vidHash,params)
        .then(groupByLang)
        .then(groups => Object.keys(groups)
                .forEach(lang => commit(types.ADD_FETCHED_SUB_FOR, {
                  lang, 
                  hash : vidHash, 
                  subs : groups[lang]
                }))
        ).then(_ => getters.getSummary(vidHash).hasSub = true)
        
}

const groupByLang = list => list.reduce((groups, sub) =>{
  // ? Has a group for this sub lang
  if(!groups.hasOwnProperty(sub.lang))
    groups[sub.lang] = []
  
  groups[sub.lang].push(sub)
  return groups
},{})
