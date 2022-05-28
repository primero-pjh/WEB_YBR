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
			context.commit('setUser', "?");
		}
	}
});

export default store;