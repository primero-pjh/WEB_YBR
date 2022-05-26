import { createStore } from 'vuex'
// import axios from 'axios'

const store = createStore({
	state () {
		return {
			name: 'lee',
			user: {},
		}
	},
	// setter
	mutations: {
		setUser(state, data) {
			state.user = data;
		}
	},
	// getter
	actions: {
		get_user_info(context) {
			console.log("get_user_info");
			context.commit('setUser', "?");
		}
	}
});

export default store;