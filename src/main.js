import Vue from 'vue'
import App from './App'

import Home from './pages/Home'
import Constitution from './pages/Constitution'
import Regulations from './pages/Regulations'
import Board from './pages/Board'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/constitution', component: Constitution },
    { path: '/board', component: Board },
    { path: '/regulations', component: Regulations }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
