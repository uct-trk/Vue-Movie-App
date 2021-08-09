import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isUserLoggedIn: true
    },
    mutations: {
        SET_USER_LOGGEDIN(state, payload) {
            state.isUserLoggedIn = payload
        }
    },
    actions: {
        setUserLoggedIn({ commit }, loggedIn) {
            commit("SET_USER_LOGGEDIN", loggedIn)
        }
    },
    getters: {
        isUserLoggedIn(state) {
            return state.isUserLoggedIn
        }
    }
})