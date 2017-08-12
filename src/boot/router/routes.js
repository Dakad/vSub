
import Dropzone from '../../pages/Dropzone.vue'
import Summary from '../../pages/Summary.vue'

export default [
  { name: 'home', path: '/', redirect: '/drop'},
  { name: 'drop', path: '/drop', component: Dropzone },
  { name: 'dropped', path: '/dropped', redirect: '/summary'},
  { name: 'summary', path: '/summary',component: Summary },
  
]