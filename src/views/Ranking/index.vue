<template>
  <div class='header'>
     <header-type title='排行榜' ></header-type>
     <div class='main'>
     <normall-header :types='typeList' @click='fn1'></normall-header>
     <cartoon-list :list='list' :isRuning='true'></cartoon-list>
  </div>
  </div>
</template>

<script>
import HeaderType from '@/components/HeaderType'
import NormallHeader from '@/components/NormallHeader'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/apiHelp'
import { getRank } from '@/api/cartoon'
export default {
  name: 'Ranking',
  components: {
    HeaderType,
    NormallHeader,
    CartoonList
  },
  data () {
    return {
      typeList: [
        { id: 1, name: '热搜榜', ranktype: 6 },
        { id: 2, name: '人气榜', ranktype: 1 },
        { id: 3, name: '畅销榜', ranktype: 4 },
        { id: 4, name: '新书榜', ranktype: 2 },
        { id: 5, name: '完结榜', ranktype: 5 },
        { id: 6, name: '免费榜', ranktype: 3 }

      ],
      rankList: []
    }
  },
  created () {
    this.getRanks(this.typeList[0].ranktype)
  },
  methods: {
    fn1 (payload) {
      // console.log(payload)
      this.getRanks(payload.data.ranktype)
    },
    getRanks (object) {
      getRank(object).then(res => {
        if (res.code === 200) {
          this.rankList = JSON.parse(unformat(res.info)).ranklist
          console.log(this.rankList)
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log('网络错误' + err)
      })
    }
  },
  computed: {
    list () {
      return this.rankList.map(item => {
        return {
          id: item.bigbookid,
          name: item.name,
          author: item.author,
          coverurl: item.coverurl,
          view: item.weekhits
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.header{
  display:flex;
  flex-direction: column;
  height: 100%;
  .main{
    flex:1;
    overflow-y:auto ;
  }
}
</style>
