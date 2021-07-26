import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getLogin(state){
      return state.login
    }
  }
})
