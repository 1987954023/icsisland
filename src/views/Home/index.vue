<template>
  <div class = 'page-home'>
    <indexheader></indexheader>
    <div class='main'>
    <Swiper  :autoplay="2000" :loop="true" class="swiper" v-if="list.length>0">
      <Swiperitem v-for="item in list" :key="item.id">
        <img  :src='item.imageurl'  />
      </Swiperitem>
    </Swiper>
  <indexnav></indexnav>
   <index-main v-for="item in indexList" :key="item.specialid" :info="item"></index-main>
    <div class="my-icp">
        <a
          class="record"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214"
          target="_blank"
        >
          <img
            class="img"
            src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg"
          />
          <div>沪公网安备 31011202006214号</div>
        </a>
        <div class="licence">
          增值电信业务经营许可证沪B2-20170022
          <br />网络文化经营许可证沪网文（2016）3206-227号
          <br />出版物经营许可证新出发沪批字第U7659号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Swiperitem } from '@/components/Swiper'
import { getBanner, getIndex } from '../../api/cartoon'
import indexMain from './components/main.vue'
import indexnav from './components/indexnav.vue'
import indexheader from './components/hrader.vue'
export default {
  name: 'Home',
  components: {
    Swiper,
    Swiperitem,
    indexMain,
    indexnav,
    indexheader
  },
  data () {
    return {
      list: [],
      indexList: []
    }
  },
  methods: {
    changHandler (payload) {
      // console.log(payload)
    }
  },
  created () {
    // fetch('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })
    // fetch('/lulu/geo/')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //     console.log(1)
    //   })
    getBanner().then(res => {
      // console.log(res)
      if (res.code === 200) {
        this.list = res.info
      } else {
        // 先通过alert报错
        alert(res.code)
      }
    }).catch((err) => {
      alert('网络异常' + err)
    })
    getIndex().then((res) => {
      console.log(res)
      if (res.code === 200) {
        this.indexList = res.info
      } else {
        alert(res.code)
      }
    }).catch((err) => {
      alert('网络错误' + err)
    })
  }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/mincss.scss';
.page-home{
  display: flex;
  flex-direction: column;
  height: 100%;
  .main{
    flex: 1;
    overflow-y: auto;
  }
  .swiper{
    img{
      width: 100%;
    }
  }

  .my-icp {
    padding: 5px 0;
    font-size: 12px;
    .record {
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 15px;
        height: 15px;
        margin-right: 4px;
      }
    }
    .licence {
      margin-top: 4px;
      text-align: center;
    }
  }
}

</style>
