import Vue from 'vue'
import App from './App'

import Home from './pages/Home'
import Constitution from './pages/Constitution'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/constitution', component: Constitution }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
