import Vue from 'vue'
import Vuex from 'vuex'
import appService from '../appScript.service.js'
import postsModule from './posts'

Vue.use(Vuex)

const state = {
  blnIsAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    blnIsAuthenticated: (state) => {
      return state.blnIsAuthenticated
    }
  },
  actions: {
    logoutAction (context) {
      context.commit('logoutMutation')
    },
    loginAction (context, objCredentials) {
      return new Promise((resolve) => {
        appService.login(objCredentials)
          .then((data) => {
            context.commit('loginMutation', data)
            resolve()
          })
          .catch(() => window.alert('Could not login!'))
      })
    }
  },
  mutations: {
    logoutMutation (state) {
      // Check on window object, since this JS might run in the back-end i.e. using node.js
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
      }
      state.blnIsAuthenticated = false
    },
    loginMutation (state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token)
        window.localStorage.setItem('tokenExpiration', token.expiration)
      }
      state.blnIsAuthenticated = true
    }
  }
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    // Check whether the expiration data is in the future compared to now.
    let numExpiration = window.localStorage.getItem('tokenExpiration')
    let numUnixTimestamp = new Date().getTime() / 1000
    if (numExpiration !== null && parseInt(numExpiration) - numUnixTimestamp > 0) {
      store.state.blnIsAuthenticated = true
    }
  })
}

export default store
