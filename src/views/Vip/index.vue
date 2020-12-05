<template>
  <div class="header">
    <header-type title="Vip专区"></header-type>
    <scroll class="main" ref="scroll" @scrolls="fn2">
      <cartoon-list :list="list"></cartoon-list>
    </scroll>
    <!-- <div class="main" ref="vip">
      <cartoon-list :list="list" @onLoad="onLoad"></cartoon-list>
    </div>-->
    <gun @click.native="fn1" v-show="!ccc"></gun>
  </div>
</template>

<script>
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/apiHelp'
import { getVip } from '@/api/cartoon'
// import BScroll from 'better-scroll'
import Gun from '../../components/Gun/index.vue'
import Scroll from '../../components/Scroll/index.vue'
export default {
  name: 'Vip',
  data () {
    return {
      viplist: [],
      ccc: true
    }
  },
  components: {
    HeaderType,
    CartoonList,
    Scroll,
    Gun
  },
  created () {
    this.viplists()
  },
  methods: {
    fn2 (aaa) {
      console.log(aaa)
      if (aaa.y < -500) {
        this.ccc = false
      }
    },
    viplists () {
      const age = 1

      getVip(age)
        .then(res => {
          if (res.code === 200) {
            this.viplist = this.viplist.concat(
              JSON.parse(unformat(res.info)).comicsList
            )
            // console.log(this.viplist)
            this.loading = false

            // 数据全部加载完成
            if (age * 15 >= 60) {
              this.finished = true
            }
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络错误' + err)
        })
    },
    // viplists () {
    //   getVip().then(res => {
    //     if (res.code === 200) {
    //       this.viplist = JSON.parse(unformat(res.info)).comicsList
    //       // console.log(this.viplist)
    //     } else {
    //       alert(res.code_msg)
    //     }
    //   }).catch(err => {
    //     alert('网络错误' + err)
    //   })
    // }
    fn1 () {
      // console.log(1)
      console.log(this.$refs)
      console.log(this.$refs.scroll.bscroll)
      this.$refs.scroll.bscroll.scrollTo(0, 0, 500)
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
    // this.bscroll = new BScroll(this.$refs.vip, {
    //   click: true
    // });
    /* eslint-enable */
  }
}
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
