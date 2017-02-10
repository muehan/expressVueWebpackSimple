import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/api';

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        ADD_USERS(state, users) {
            state.users = users;
        }
    },
    actions: {
        addUsers({ commit }) {
            api.getUsers()
                .then(response => commit('ADD_USERS', response.body))
                .catch(error => console.log(error));
        }
        // also possible
        // addTodo = function(store){
        // var commit = store.commit
        // commit('ADD_TODO')
        // }
    },
    getters: {
        users: state => state.users,
    }
})