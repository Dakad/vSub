
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import VueRouter from 'vue-router'


import routes from './routes/'
import store from './store/'
import App from './App.vue'

import components from './components/global';


Vue.use(Vue2Filters)
Vue.use(VueRouter)


/**
 * Register Global Components
 *
 */
Object.keys(components)
      .forEach(tag => Vue.component(tag, components[tag]));


// Instanciate the app and mount it to the DOM (#app)
new Vue({ // eslint-disable-line no-new
  el: '#root',
  store,
  router : new VueRouter({mode: 'hash', routes}),
  render: (h) => h(App)
})
