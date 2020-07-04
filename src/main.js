import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Api from "../src/network/api"
Vue.use(Element)


Vue.config.productionTip = false

new Vue({
  router,
  Api,
  render: h => h(App),
}).$mount('#app')
