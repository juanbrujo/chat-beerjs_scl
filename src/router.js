import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home } from './views'
// import { Home /* , About */} from './views'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home } // ,
  // { path: '/about', component: About }
]

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history'
})
