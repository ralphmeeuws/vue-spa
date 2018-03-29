import { myApp, router } from './appScript'

router.onReady(() => {
  myApp.$mount('#app-hook')
})
