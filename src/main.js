import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/APP'
import * as filters from '@/utils/filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
Window.prototype._vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
