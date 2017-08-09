


// -------------------------------------------------------------------
// Dependencies

// Import
import OS from 'opensubtitles-api';


// Built-in
import Krypto from'crypto'
import Promise from 'bluebird'


// Mine
import Hash from '../utils/hash'


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
    this.openSub.login()
        .then( ({token}) => this.token = token)
        .catch(console.error)
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
  
  getDetails(hash) {
    if(!Array.isArray(hash)) hash = [hash]
    return this.openSub.api.CheckMovieHash(this.token, hash)
  }
    
    
    
}



