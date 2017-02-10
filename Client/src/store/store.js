import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todos: [],
        newtodo: ""
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push({
                text: todo
            });
            state.newtodo = todo;
        }
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo)
        }
        // also possible
        // addTodo = function(store){
        // var commit = store.commit
        // commit('ADD_TODO')
        // }
    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos
    }
})