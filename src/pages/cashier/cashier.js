import Vue from 'vue'
import cashier from './cashier.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(cashier),
}).$mount('#app')
