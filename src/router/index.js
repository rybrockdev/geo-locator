import Vue from 'vue'
import Router from 'vue-router'
import GMap from '../components/Home/GMap'
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
