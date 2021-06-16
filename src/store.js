import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: null
    },


    actions:{
        register ({ commit }, credentials) {
            return axios
            ////localhost:3000/register
              .post('https://60a6c74ab970910017eb25e0.mockapi.io/clientes', credentials)
              .then(({ data }) => {
                commit('SET_USER_DATA', data)
              })
          },
          login ({ commit }, credentials) {
            // alert("login")
            return axios
            ////localhost:3000/login
              .post('https://60a6c74ab970910017eb25e0.mockapi.io/clientes', credentials)
              .then(({ data }) => {
                console.log(data)
                commit('SET_USER_DATA', data)
              })
          },
          logout ({ commit }) {
            commit('CLEAR_USER_DATA')
          } 
    
    },


    mutations:{
        SET_USER_DATA (state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    
        },
        CLEAR_USER_DATA () {
            localStorage.removeItem('user')
            location.reload()
          }
    },


    getters: {
        loggedIn (state) {
          return !!state.user
        }
    }

})
