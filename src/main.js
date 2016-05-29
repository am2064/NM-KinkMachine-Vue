import Vue from 'vue'
import store from './store'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  store,
  components: { App }
})
