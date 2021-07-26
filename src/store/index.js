import Vue from 'vue'
import Vuex from 'vuex'
import createParsistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {
      token: '',
      login: false,
    }
  },
  mutations: {
    setLogin(state, login){
      state.login = login
    },
    setContentID(state, contentID) {
      state.contentID = contentID
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getLogin(state){
      return state.login
    },
    getToken(state) {
      return state.login.token
    },
    getContentID(state) {
      return state.contentID
    }
  },
  plugins: [
    createParsistedState({ storage: window.localStorage })
  ]
})
