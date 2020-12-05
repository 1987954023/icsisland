<template>
  <div class="page-classify">
    <header-type title="分类"></header-type>
    <div class="main" ref="classify">
      <div>
        <normall-type :types="typeList" @click="onChange"></normall-type>
        <cartoon-list :list="list"></cartoon-list>
      </div>
    </div>
  </div>
</template>

<script>
import headerType from '../../components/HeaderType/index.vue'
import normallType from '../../components/NormallHeader'
import cartoonList from '../../components/CartoonList'
import { getType, getTypeLists } from '../../api/cartoon'
import { unformat } from '../../apiHelp'
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core'
// import PullUp from '@better-scroll/pull-up'
export default {
  name: 'Classify',
  data () {
    return {
      typeList: [],
      getTypeList: [],
      Oscroll: null,
      num: 1
    }
  },
  computed: {
    list () {
      return this.getTypeList.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.bigcoverurl,
          view: item.bigbookview
        }
      })
    }
  },
  components: {
    headerType,
    normallType,
    cartoonList
  },
  methods: {
    onChange (paylaod) {
      // console.log(paylaod)
      this.getTypeLists(paylaod.data.targetargument, this.num)
    },
    getType () {
      return getType()
        .then(res => {
          // console.log(res)
          if (res.code === 200) {
            this.typeList = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络错误' + err)
        })
    },

    getTypeLists (object, age) {
      getTypeLists(object, age)
        .then(res => {
          // console.log(res)
          if (res.code === 200) {
            this.getTypeList.push(...JSON.parse(unformat(res.info)).comicsList)

            this.num = this.num + 1
            // console.log(JSON.parse(unformat(res.info)).comicsList)
            // console.log(this.getTypeList)
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络错误' + err)
        })
    }
  },
  async created () {
    await this.getType()
    // console.log(this.typeList)
    this.getTypeLists(this.typeList[0].targetargument, this.num)
  },
  mounted () {
    /*eslint-disable*/
    this.Oscroll = new BScroll(this.$refs.classify, {
      click: true,
      probeType: 3,
      scrollY: true,
      // pullDownRefresh: {
      //   threshold: 50,
      //   probeType: 3
      // },
      pullUpLoad: {
        threshold: 744
      }
    });
    /* eslint-enable */
    // this.Oscroll.on('scroll', aaa => {
    //   console.log(aaa)
    // })
    this.Oscroll.on('pullingUp', () => {
      this.getTypeLists(this.typeList[0].targetargument, this.num)
      this.Oscroll.finishPullUp()
    })
  }
}
</script>

<style lang='scss' scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
