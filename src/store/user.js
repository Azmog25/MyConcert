import Vuex from 'vuex'

const state = {
    login: '',
    password: '',
    role: ''
};
const mutations = {
    SET_LOGIN(state, login) {
        state.login = login;
    },
    SET_PASSWORD(state, password) {
        state.password = password;
    },
    SET_ROLE(state, role) {
        state.role = role;
    }
};

const actions = {
    setLogin({ commit }, login) {
        commit('SET_LOGIN', login);
    },
    setPassword({ commit }, password) {
        commit('SET_PASSWORD', password);
    },
    setRole({ commit }, role) {
        commit('SET_ROLE', role);
    }
};

const getters = {
    getLogin: state => state.login,
    getPassword: state => state.password,
    getRole: state => state.role
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

