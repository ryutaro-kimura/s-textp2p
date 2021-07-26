import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import conf from './conf.js'
import firebase from 'firebase/app'

Vue.config.productionTip = false

firebase.initializeApp(conf)

new Vue({
  vuetify,
  store,
  router,
  firebase,
  render: h => h(App)
}).$mount('#app')
