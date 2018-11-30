import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import './plugins/vuetify'
import App from './App.vue'

// HTTP 요청을 위한 라이브러리 로딩
Vue.use(VueResource);
Vue.use(VueCookie);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
