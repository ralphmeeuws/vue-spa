import Vue from 'vue'
import MyAppLayout from './theme/Layout.vue'

const myApp = new Vue({
  render: h => h(MyAppLayout)
})

export { myApp }
