import Vue from 'vue'
// Jquery
 window.jQuery = window.$ = require('jquery');
// Bootstrap
require('./assets/js/bootstrap');
require('./assets/css/bootstrap');
// Admin LTE
require('./assets/js/adminlte');
require('./assets/css/adminlte');


import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
