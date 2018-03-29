import Vue from 'vue'
import store from './vuex/index.js'
import MyAppLayout from './theme/Layout.vue'
import router from './router'

Vue.config.devtools = true

const myApp = new Vue({
  router,
  ...MyAppLayout,
  store
})

export { myApp, router, store }
