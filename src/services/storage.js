/**
 * Service to handle the storage process .
 *
 */

const localStorage = window.localStorage;

/**
 * All KEYS for the storing process.
 *
 */
const KEY_FOR_OPEN_SUB_API_TOKEN = 'spYPIHMPg4';

const KEY_FOR_HASH = 'HASH_FOR_';

const KEY_FOR_OPEN_SUB_FOR = 'OPEN_SUB_FOR_';

const KEY_FOR_OPEN_DETAILS_FOR = 'OPEN_DETAILS_FOR_';


/**
 * Same process to cache/retrieve some object into/from the localStorage
 *
 */
const marshall = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const unmarshall = (key) => JSON.parse(localStorage.getItem(key))

const remove = (key) => localStorage.removeItem(key)



/**
 * OpenSub API
 *
 */

export const OpenSub = {

 saveToken: token => marshall(KEY_FOR_OPEN_SUB_API_TOKEN, token),

 getToken: _ => unmarshall(KEY_FOR_OPEN_SUB_API_TOKEN),


 /**
  * Hash FOR DROPPED
  *
  */
 
 hasHashFor : hash => localStorage.hasOwnProperty(KEY_FOR_HASH + hash),

 saveHashFor: (hash, data) => marshall(KEY_FOR_HASH + hash, data),

 getHashFor: hash => unmarshall(KEY_FOR_HASH + hash),

 /**
  * DETAILS FOR DROPPED
  *
  */
 
 hasDetailsFor : hash => localStorage.hasOwnProperty(KEY_FOR_OPEN_DETAILS_FOR + hash),

 saveDetailsFor: (hash, details) => marshall(KEY_FOR_OPEN_DETAILS_FOR + hash, details),

 getDetailsFor: hash => unmarshall(KEY_FOR_OPEN_DETAILS_FOR + hash),


 /**
  *  FETCHED SUBS
  */

 hasSubsFor : hash => localStorage.hasOwnProperty(KEY_FOR_OPEN_SUB_FOR + hash),

 saveSubsFor: (hash, subsId) => marshall(KEY_FOR_OPEN_SUB_FOR + hash, subsId),

 getSubsFor: hash => unmarshall(KEY_FOR_OPEN_SUB_FOR + hash),
 
}
