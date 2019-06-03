import Vue from 'vue'
import { VueRedux } from '@leopiccionia/vue-redux'

import App from './App.vue'
import { store } from './store'

Vue.use(VueRedux)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
