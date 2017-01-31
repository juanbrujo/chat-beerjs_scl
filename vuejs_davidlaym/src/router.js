import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Login, Rooms } from './views'

Vue.use(VueRouter)

function redirectNotLogedUsers (from, to, next) {
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

function redirectLogedUsers (from, to, next) {
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

const routes = [
  { path: '/',
    name: 'home',
    component: Home,
    beforeEnter: redirectNotLogedUsers
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: redirectLogedUsers
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms,
    beforeEnter: redirectNotLogedUsers
  }
]

/* eslint-disable no-new */
var router = new VueRouter({
  routes
})

export default router

