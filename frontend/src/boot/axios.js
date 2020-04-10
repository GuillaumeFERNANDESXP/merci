import axios from 'axios'

Vue.prototype.$axios = axios
const token = localStorage.getItem('token')
Vue.prototype.$axios.defaults.headers.common['Authorization'] = token