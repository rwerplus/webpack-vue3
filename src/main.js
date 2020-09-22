import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import './config/index'
import './components/common/element-variables.scss'
Vue.config.productionTip = false
Vue.use(components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
