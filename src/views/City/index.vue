<template>
  <div class="page-city">
    <header-type :title="`城市-${curCityName}`" :isShow="false"></header-type>
    <div class="city-main">
      <div class="left" ref="scrollLeft">
        <div>
          <div
            v-for="(item, index) in list"
            :key="index"
            class="city-index-section"
            :ref="`section-${item.yin}`"
          >
            <p>{{item.yin}}</p>
            <ul>
              <li
                v-for="items in item.list"
                :key="items.cityId"
                @click="changeCity(items)"
              >{{items.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in indexs" :key="item" @click="handler(item)">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderType from '~@/assets/components/HeaderType/index.vue'
import HeaderType from '../../components/HeaderType/index.vue'
import { City } from '@/api/city'
import { mapMutations, mapGetters } from 'vuex'
import BScroll from 'better-scroll'
// import { List } from 'vant'
// Vue.use(List)
export default {
  name: 'City',
  data () {
    return {
      cityList: []
    }
  },
  components: {
    HeaderType
  },
  created () {
    this.Citys()
    // console.log(this.$route)
    // console.log(this.$store)
  },
  mounted () {
    /*eslint-disable*/
    this.bscroll = new BScroll(this.$refs.scrollLeft, {
      click: true
    });
    /* eslint-enable */
  },
  methods: {
    Citys () {
      City().then(res => {
        this.cityList = res.data.data.cities
      })
    },
    handler (yin) {
      // this.$refs.scrollLeft.scrollTop = this.$refs[`section-${yin}`][0].offsetTop
      const target = this.$refs[`section-${yin}`][0]
      this.bscroll.scrollTo(0, -target.offsetTop, 500)
    },
    ...mapMutations('city', ['SET_CITY']),
    changeCity (city) {
      this.SET_CITY(city)
      // 设置完城市跳转首页
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },
  computed: {
    //   [
    //       {
    //           yin:'A',
    //           arr:[{‘北京}，{上海}]
    //       }，
    //       {
    //           yin：'B'，
    //           arr:[{}]
    //       }
    //   ]
    ...mapGetters('city', ['curCityName']),
    list () {
      const arr = []
      this.cityList.forEach(item => {
        const yin = item.pinyin.substring(0, 1).toUpperCase()
        const index = arr.findIndex(item => item.yin === yin)
        if (index > -1) {
          // 找到了这个拼音开头
          arr[index].list.push(item)
        } else {
          arr.push({
            yin: yin,
            list: [item]
          })
        }
      })
      return arr.sort((a, b) => a.yin.charCodeAt() - b.yin.charCodeAt())
    },
    indexs () {
      return this.list.map(item => item.yin)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/styles/mincss.scss";
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .city-main {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  .left {
    flex: 1;
    height: 100%;
    // overflow: auto;
    position: relative;
    .city-index-section {
      @include border-bottom;
      padding-left: 15px;
      p {
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li {
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }
  .right {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
