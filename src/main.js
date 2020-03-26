import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false 

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')