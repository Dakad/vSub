
import Dropzone from '../pages/Dropzone.vue'


export default [
  { name: 'home', path: '/', redirect: '/drop'},
  { name: 'drop', path: '/drop', component: Dropzone },
  // { name: 'summary', path: '/dropped', component: Dropzone },

]