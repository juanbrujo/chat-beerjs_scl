// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from 'src/router'
import App from 'src/App'

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  template: '<App/>',
  components: { App }

})
