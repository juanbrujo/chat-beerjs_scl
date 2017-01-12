import Vue from 'vue'
import VueRouter from 'vue-router'
import { Hello, About } from './views'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About }
]

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history'
})
