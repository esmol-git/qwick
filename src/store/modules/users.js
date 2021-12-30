import api from "@/api";
export default {
    state: {
        users: [],
        user:{},
        count: 0
    },
    mutations: {
    setUsers:  (state, payload) => {
        state.users = payload;
    },
    setUser: (state, payload) => {
        state.user = payload;
    },
    setCount:(state, payload) => {
        state.count =payload
    }
},
    actions: {
        async getUsers({ commit }) {
			let data = await api.users();
            console.log(data);
			commit("setUsers", data);
			commit("setCount", data.length);
		},
        async getUser({ commit }, payload) {
			let data1 = await api.user({ args: { id: payload.id } });
			commit("setUser", data1);
            console.log(data1.id);
        },
    },
    getters:{
        USERS(state) {
			return state.users;
		},
        USER(state) {
            return state.user
        },
        COUNT(state) {
			return state.count;
		},
    }
}
