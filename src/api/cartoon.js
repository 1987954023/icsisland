// 处理漫画数据
import request from '../request'
// 获取分类的类型数据
// https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
import { format } from '../apiHelp'

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
// GET  https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
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
// 获取分类的类型
// https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125
export const getType = () => {
  return request({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 125
    }
  })
}
// 获取分类上面类型对应的下面的数据
export const getTypeLists = (subject, pageno, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}
// 获得排行榜的所有数据
// https://mhd.zhuishushenqi.com/comic_v2/comicsrank?apptype=8&appversion=1.0&channel=web-app
export const getRank = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'channel=web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
// 处理Vip的数据
// https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
// "pageno":1,"pagesize":15,"special":892
export const getVip = (pageno, special = 892, pagesize = 15) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'channel=web-app'
    },
    data: format({
      special,
      pageno,
      pagesize
    })
  })
}
// 获取搜索页面中的 大家都在搜数据
// https://mhd.zhuishushenqi.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8
export const everyList = () => {
  return request({
    url: '/api/comic/hotsearch',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'channel=web-app',
      appType: 8
    }
  })
}
// 获取搜索结果面板中的下拉数据
// https://mhd.zhuishushenqi.com/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&name=23&type=2
export const searchindex = (name) => {
  return request({
    url: '/api/comic_v2/searchindex',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2

    }
  })
}
// 获取搜索结果页面的中的数据
// https://mhd.zhuishushenqi.com/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&name=%E6%81%B6%E9%AD%94%EF%BC%8C%E5%88%AB%E5%90%BB%E6%88%91&type=2&pageno=1&pagesize=100
export const searchbookauthor = (name) => {
  return request({
    url: '/api/comic_v2/searchbookauthor',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2,
      pageno: 1,
      pagesize: 100
    }
  })
}
