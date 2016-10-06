/* global componentHandler */
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.directive('mdl', {
  bind: () => {
    componentHandler.upgradeElement(this.el)
  }
})
