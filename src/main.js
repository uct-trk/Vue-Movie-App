import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import "@/assets/css/styles.css"
import App from './App.vue'
import api from './services/api'

Vue.prototype.$http = api;
Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
