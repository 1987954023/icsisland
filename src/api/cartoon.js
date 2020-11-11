// 处理漫画数据
import request from '../request'

// 获取轮播图的数据
// GET https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123
export const getBanner = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 123
    }
  })
}
// GET https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
export const getIndex = () => {
  return request({
    url: '/api/comic_v2/customerview',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      viewtype: 1
    }
  })
}
