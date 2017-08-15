import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as types from './types';

import loader from './modules/loader';
import dragdrop from './modules/dragdrop';
import dropped from './modules/dropped';
import subtitles from './modules/subtitles';


Vue.use(Vuex);


const state = {
  langs: {eng: 'English', fre: 'Français', spa : 'Español'},
  error: false,
};


const mutations = {
  [types.ADD_ERROR](state, filename) {
      state.error = filename
  },
  [types.REMOVE_ERROR](state) {
      state.error = false
  },

}


export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
      dragdrop,
      dropped,
      loader,
      subtitles,

  }
});