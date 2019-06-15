import Vue from 'vue'
import Router from 'vue-router'
import GMap from '../components/Home/GMap'
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/Login'
import firebase from '../../Firebase/init'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  // check to see if the route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check if the user has auth
    let user = firebase.auth().currentUser
    if (user) {
      // user has auth, procced to route
      next()
    } else {
      // redirect user without auth to login
      next({ name: 'Login' })

    }
  }
})
