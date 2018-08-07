import Vue from 'vue'
import Vuex from 'vuex'
import tags_view from './modules/tags_view.js'
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tags_view
  },
  getters
})

export default store