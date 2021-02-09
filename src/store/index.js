import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		msg: 'wrapper',
	},
	mutations: {
		check() {
			console.log('wrapper - Calling store check');
		}
	},
	actions: {},
	modules: {},
})
