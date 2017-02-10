import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource);

//Vue.http.headers.common['Authorization'] = 'Basic bXVlaGFuOlBzdWVjaG85OQ==';
Vue.http.headers.common['Content-Type'] = 'application/json';
//Vue.http.headers.common['Origin'] = 'https://chst3v128:8080';
// Vue.http.headers.common['X-Atlassian-Token'] = 'nocheck';
Vue.http.options.root = "http://localhost:3000/api";

const http = Vue.http

export default {
    getUsers() {
        return http.get('users')
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },

}