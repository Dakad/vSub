import Vue from 'vue'

import components from '../components/global';

import router from './router/'
import store from '../store/'


//
// Filters
//

require('./filters')


/**
 * Register Global Components
 *
 */
Object.keys(components)
      .forEach(tag => Vue.component(tag, components[tag]));



export default {
  router,
  store
}