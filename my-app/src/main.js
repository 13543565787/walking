/*
 * @Autor: hjz
 * @Date: 2020-03-19 00:16:08
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-19 00:18:31
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
