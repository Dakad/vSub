
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import VueRouter from 'vue-router'



import routes from './routes/'
import store from './store/'
import App from './App.vue'



Vue.use(Vue2Filters)
Vue.use(VueRouter)



new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router : new VueRouter({mode: 'hash', routes}),
  render: (h) => h(App)
})
