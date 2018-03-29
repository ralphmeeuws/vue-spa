import appService from '../appScript.service.js'

const defaultState = {
  posts: [],
  categroyId: 0
}

const blnInBrowser = typeof window !== 'undefined'
const state = (blnInBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.postsmodule : defaultState

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategoryAction (context, numCategoryId) {
    return appService.getPosts(numCategoryId).then(arrData => {
      context.commit('updateCategoryMutation', { numCategoryId, posts: arrData })
    })
  }
}

const mutations = {
  updateCategoryMutation (state, objCategory) {
    state.numCategoryId = objCategory.numCategoryId
    state.posts = objCategory.posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
