import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AtUi from 'at-ui'

// framework
Vue.use(AtUi)
import 'at-ui-style/css/at.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
