// ./src/store/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import { FeathersVuex } from 'feathers-vuex'
import auth from './store.auth'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(FeathersVuex)

// Require the entire folder of service plugins with Webpack
// const requireModule = require.context('./services', false, /.js$/)
// const servicePlugins = requireModule
//  .keys()
//  .map(modulePath => requireModule(modulePath).default)

// Or you can import them manually for Rollup, etc.
import users from './services/users'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {},
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, user) {
      state.status = 'success'
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    },
    createSession (state, session) {
      // state.token = session.token
      state = session
    },

    destroySession (state) {
      // state.token = ''
      state = []
    }
  },
  actions: {
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'https://api-staging.altcoinomy.com/api/v1/register',
          data: user,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
          .then(resp => {
            console.log(resp.data)
            resolve(resp)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'https://api-staging.altcoinomy.com/api/v1/auth_token', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            console.log(token)
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    postLogin ({ commit }, details) {
      commit('createSession', details)
      // console.log('Post-login steps executed, session is ready, state contains auth.user')
    },

    postLogout ({ commit }) {
      commit('destroySession')
      // console.log('State has been cleared, session is destroyed')
    }
  },
  plugins: [
    // if you're using require.context, spread the plugins into the array.
    users, // if you're manually importing, just add the plugins into the array, like this
    auth
  ]
})
