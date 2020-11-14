// 从本地存储中取出数据出来
const city = window.sessionStorage.getItem('city')
// c处分出来城市相关的模块
const state = {
  curCity: city ? JSON.parse(city) : null
}
const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}
const mutations = {
  // 设置当前城市
  SET_CITY (state, payload) {
    state.curCity = payload
    // 做一下本地点存储
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}
export default {
  // 命名空间
  namespaced: true,
  state,
  getters,
  mutations
}
