import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/base.scss'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/logo.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})
Vue.config.productionTip = false

// 数字变成带单位的数字
// 第一个参数是过滤的名字
// 第二个参数是回调函数 必须有返回值
Vue.filter('formatYi', (value) => {
  var Yi = Math.pow(10, 8)
  if (value > Yi) {
    return `${(value / Yi).toFixed(2)}亿`
  } else {
    return `${(value / Math.pow(10, 4)).toFixed(2)}万`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
