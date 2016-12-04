import Vue from 'vue'
import App from './App'

import Home from './pages/Home'
import Constitution from './pages/Constitution'
import Regulations from './pages/Regulations'
import Board from './pages/Board'
import Champions from './pages/Champions'
import Seasons from './pages/Seasons'
import Federations from './pages/Federations'
import Clubs from './pages/Clubs'
import Links from './pages/Links'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/constitution', component: Constitution },
    { path: '/board', component: Board },
    { path: '/regulations', component: Regulations },
    { path: '/champions', component: Champions },
    { path: '/seasons', component: Seasons },
    { path: '/federations', component: Federations },
    { path: '/clubs', component: Clubs },
    { path: '/links', component: Links }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
