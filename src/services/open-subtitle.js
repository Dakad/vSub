


// -------------------------------------------------------------------
// Dependencies

// Import
import OS from 'opensubtitles-api';


// Built-in
import Krypto from'crypto'
import Promise from 'bluebird'


// Mine
import Hash from '../utils/hash'
import { OpenSub as Storage} from './storage'


// -------------------------------------------------------------------
// Properties


// -------------------------------------------------------------------
// Exports

export default class OpenSub {
    
  constructor(OSConfig) {
    if(!OSConfig) throw new Error('OpenSub required Config values')
    
    if(!OSConfig.useragent) OSConfig.useragent = 'UserAgent'
      
    OSConfig.password = Krypto.createHash('md5').update(OSConfig.password).digest('hex')
    this.openSub = new OS(OSConfig)
    
    // ? No token cached ?
    this.token = Storage.getToken()
    if(!this.token){
      this.openSub.login()
        .then( ({token}) => this.token = token)
        .then(Storage.saveToken)
        .catch(console.error)
    }
  }
  
  hash(file) {
    return new Promise((resolve, reject) => {
      return Hash(file, (err, data) => {
        return (err) ? reject(err) : resolve({
          moviehash: data,
          moviebytesize : file.size
        });
      })
    })
  }
  
  // TODO Handle the error on API Call
  
  getDetails(hash) {
    if(!Array.isArray(hash)) hash = [hash]
    return this.openSub.api.CheckMovieHash(this.token, hash)
  }
  
  getSubtitles(vids) {
    console.log(vids);
    // return this.openSub.api.SearchSubtitles(this.token,vids)
  }
    
    
}




