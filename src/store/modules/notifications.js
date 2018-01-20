import {
    ADD_FLASH_MSG,
    RESET_FLASH_MSG,
} from '../types';

const state = {
    list: []
}

const mutations = {
    [ADD_FLASH_MSG](state, payload) {
        state.list.unshift(payload) // Add on top of []
    },
    [RESET_FLASH_MSG](state) {
        state.list = []
    }
}

export default {
    state,
    mutations
}