import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		login:''
	},
	mutations: {
		login(state,provider){
			state.login=provider;
		},
		logout(state){
			login='';
		}
	},
})

export default store
