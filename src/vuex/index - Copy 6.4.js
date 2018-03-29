import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  blnIsAuthenticated: false
}

const store = new Vuex.Store({
  state,
  getters: {
    blnIsAuthenticated: (state) => {
      return state.blnIsAuthenticated
    }
  }
})

export default store
