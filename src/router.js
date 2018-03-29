import Vue from 'vue'
import VueRouter from 'vue-router'

import CategoryComponent from './theme/Category.vue'
import LoginComponent from './theme/Login.vue'
import NotFoundComponent from './theme/NotFound.vue'

// const CategoryComponent = () => System.import('./theme/Category.vue')
// const LoginComponent = () => System.import('./theme/Login.vue')
// const NotFoundComponent = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/category/:id', name: 'category', component: CategoryComponent },
    { path: '/', redirect: '/category/front-end' },
    { path: '*', component: NotFoundComponent }
  ]
})

export default router
