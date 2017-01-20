import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Login } from './views'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: Home,
    beforeEnter: (from, to, next) => {
      var userDataStr = window.localStorage.getItem('userData')
      if (!userDataStr) {
        next('/login')
      } else {
        var userData = JSON.parse(userDataStr)
        if (!userData || !userData.image_url) {
          next('/login')
        } else {
          next()
        }
      }
    }
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: (from, to, next) => {
      var userDataStr = window.localStorage.getItem('userData')
      if (!userDataStr) {
        next()
      } else {
        var userData = JSON.parse(userDataStr)
        if (!userData || !userData.image_url) {
          next()
        } else {
          next('/')
        }
      }
    }
  }
]

/* eslint-disable no-new */
var router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

