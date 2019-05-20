import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Axios from "axios"
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.prototype.$http = Axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
