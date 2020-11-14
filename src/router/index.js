import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// import Home from '../views/Home'
// import Classify from '../views/Classify'
// import Hello from '../views/Hello'
// import Favorite from '../views/Hello/Favorite'
// import History from '../views/Hello/History'
// import Login from '../views/Login'
// import My from '../views/My'
// import Ranking from '../views/Ranking'
// import Register from '../views/Resigter'
// import Search from '../views/Search'
// import SearchResult from '../views/SearchResult'
// import Vip from '../views/Vip'
// import City from '../views/City'

// 实现路由懒加载 异步引入
const Home = () => import('../views/Home')
const Classify = () => import('../views/Classify')
const Hello = () => import('../views/Hello')
const Favorite = () => import('../views/Hello/Favorite')
const History = () => import('../views/Hello/History')
const Login = () => import('../views/Login')
const My = () => import('../views/My')
const Ranking = () => import('../views/Ranking')
const Register = () => import('../views/Resigter')
const Search = () => import('../views/Search')
const SearchResult = () => import('../views/SearchResult')
const Vip = () => import('../views/Vip')
const City = () => import('../views/City')

// 去掉小圆圈
nprogress.configure({ showSpinner: false })

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'favorite',
          component: Favorite
        },
        {
          path: 'history',
          component: History
        },
        {
          path: '',
          redirect: '/hello/history'
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/search', component: Search },
    { path: '/searchResult', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', redirect: '/home' },
    { path: '/city', component: City }

  ]
})
router.beforeEach((to, from, next) => {
  nprogress.start()
  // 判断当前是否选择了城市
  // console.log(store)
  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  nprogress.done()
})
export default router
