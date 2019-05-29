// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router/router.js'
import HTTP from './axios/http'
import store from './store'
import charts from 'echarts'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(charts)
Vue.prototype.$echarts = charts
Vue.prototype.$HTTP = HTTP

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
