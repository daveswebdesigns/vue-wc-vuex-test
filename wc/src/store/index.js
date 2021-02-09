import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  msg: 'Web Component'
  },
  mutations: {
	  check() {
		  console.log('component - Calling store check');
	  }
  },
  actions: {
  },
  modules: {
  }
})
