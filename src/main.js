import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/base.scss'
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css'

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

// const gotop = {
//   data () {
//     return {
//       visible: false
//     }
//   },
//   template: `
//   <div v-show="visible" @click="goTop" class = "gotop">
//       点我
//       </div>
//   `,
//   methods: {
//     goTop () {
//       this.$el.parentElement.scrollTop = 0
//     }
//   }
// }
// Vue.directive('gotop', (el) => {
//   // 1、使用 Vue.extend() 方法来拓展 Vue，得到一个 Vue的子类
//   const Gotop = Vue.extend(gotop)
//   //  console.log(Gotop)
//   // 2、通过 GoTop 生成 GoTop的实例
//   const instance = new Gotop()
//   //   console.log(instance)
//   instance.$mount()
//   // 3、将dom对象插入el
//   el.appendChild(instance.$el)
//   // console.log(instance.$el)
//   el.addEventListener('scroll', () => {
//     if (el.scrollTop >= el.clientHeight) {
//       instance.visible = true
//     } else {
//       instance.visible = false
//     }
//   })
//   console.log(el)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
