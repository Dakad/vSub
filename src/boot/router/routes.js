
import Dropzone from '../../pages/Dropzone.vue'
import Summary from '../../pages/summary/Summary.vue'

export default [
  { name: 'home', path: '/', redirect: '/drop'},
  { name: 'drop', path: '/drop', component: Dropzone },
  { name: 'summary', path: '/summary', alias: '/dropped',component: Summary },
  
]