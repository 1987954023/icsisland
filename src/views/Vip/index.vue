<template>
  <div class='header'>
    <header-type title='Vip专区' ></header-type>
    <div class='main' ref='vip'>
    <cartoon-list :list='list'></cartoon-list>
    </div>
  </div>
</template>

<script>
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/apiHelp'
import { getVip } from '@/api/cartoon'
import BScroll from 'better-scroll'
export default {
  name: 'Vip',
  data () {
    return {
      viplist: []
    }
  },
  components: {
    HeaderType,
    CartoonList
  },
  created () {
    this.viplists()
  },
  methods: {
    viplists () {
      getVip().then(res => {
        if (res.code === 200) {
          this.viplist = JSON.parse(unformat(res.info)).comicsList
          console.log(this.viplist)
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        alert('网络错误' + err)
      })
    }
  },
  computed: {
    list () {
      return this.viplist.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.coverurl,
          view: item.bigbookview
        }
      })
    }
  },
  mounted () {
    /*eslint-disable*/
  this.bscroll=new BScroll(this.$refs.vip,{
    click:true
  })
   /* eslint-enable */
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
