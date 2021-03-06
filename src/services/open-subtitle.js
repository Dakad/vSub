


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
    if(!this.token)
      this.getLogin()
    
  }
  
  handleError(err){
    const msg = err.message
    err.code = Number.parseInt(msg.slice(0,3))
    err.msg = msg.slice(4)
    throw err
  }
  
  
  getLogin(){
    this.openSub.login()
        .then( ({token}) => this.token = token)
        .then(Storage.saveToken)
        .catch(this.handleError)
  }
  
  hash(file) {
    const {name, size} = file
    if (Storage.hasHashFor(name)) 
      return Promise.resolve(Storage.getHashFor(name))

    return new Promise((resolve, reject) => {
      return Hash(file, (err, data) => {
        return (err) ? reject(err) : resolve({
          moviehash: data,
          moviebytesize : size
        });
      })
    })
    .then(hash => {
      Storage.saveHashFor(name, hash)
      return hash
    })
  }
  
  
  getDetails(hash) {
    if(!Array.isArray(hash)) hash = [hash]
    // Check the Storage first for some details on vid
    if (Storage.hasDetailsFor(hash)) 
      return Promise.resolve({data : Storage.getDetailsFor(hash)})
    
    return this.openSub.api.CheckMovieHash(this.token, hash)
                .then(res => {
                  if(res.data)
                    Storage.saveDetailsFor(hash, res.data)
                  return res
                })
                .catch(this.handleError)
  }
  
  getSubtitles(vidHash,vidParam) {
    // Check Storage for subs
    if (Storage.hasSubsFor(vidHash)) 
      return Promise.resolve(Storage.getSubsFor(vidHash))
    
    // No Subs cached for this vid, call the API
    return this.openSub.api.SearchSubtitles(this.token,vidParam)
      .then(res => res.data.map(data => ({
        id : data.IDSubtitle,
        idGZ : data.IDSubtitleFile,
        hash : data.SubHash,
        matchedBy : data.MatchedBy,
        lang : data.SubLanguageID,
        encoding : data.SubEncoding ,
        date : data.SubAddDate,
        filename : data.SubFileName,
        ext : data.SubFormat,
        size : data.SubSize,
        link : data.SubtitlesLink,
        linkGZ : data.SubDownloadLink,
        downloadCount : data.SubDownloadsCnt,
      })))
      .then(list => {
        // const subsId = list.map(({id, link, lang}) => ({
        //   id, link, lang
        // }))
        // Storage.saveSubsFor(vidHash, subsId)
        Storage.saveSubsFor(vidHash, list)
        return list
      })
      .catch(this.handleError)
  }
    
    
}




