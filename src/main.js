/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import './lib/css/mui.css'
import './lib/css/icons-extra.css'
import {Swipe, SwipeItem, Header, Button} from 'mint-ui'
import moment from 'moment'

// axios.defaults.baseURL = 'https://api.github.com/search'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header) // 将Header设置为全局属性
Vue.component(Button.name, Button)

Vue.use(VueRouter)
Vue.filter('dateFormat', function (dateStr, pattern = `YY-MM-DD HH:mm:ss`) {
  return moment(dateStr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
