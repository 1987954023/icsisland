import gotop from './index.vue'
Vue.directive('gotops', (el) => {
    // 1、使用 Vue.extend() 方法来拓展 Vue，得到一个 Vue的子类
    const Gotop = Vue.extend(gotop)
    //  console.log(Gotop)
    // 2、通过 GoTop 生成 GoTop的实例
    const instance = new Gotop()
    //   console.log(instance)
    instance.$mount()
    // 3、将dom对象插入el
    el.appendChild(instance.$el)
    // console.log(instance.$el)
    el.addEventListener('scroll', () => {
      if (el.scrollTop >= el.clientHeight) {
        instance.visible = true
      } else {
        instance.visible = false
      }
    })
    console.log(el)
  })
  export default gotops
