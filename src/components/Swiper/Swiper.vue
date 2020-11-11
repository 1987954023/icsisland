<template>
  <div class="swiper-container" ref='swiper'>
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    /*eslint-disable*/
    var _this=this
    new Swiper(this.$refs.swiper,{
      //是否循环播放
      loop:this.loop,
       // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    },
    //是否自动轮播
    autoplay:this.autoplay? {
    delay: this.autoplay,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    }:false,

     on: {
    slideChangeTransitionEnd: function(){
    //   console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
    //   console.log(this.realIndex)
      //触发自定义事件
      _this.$emit('change',this.realIndex)
  }
     }
    })
    /* eslint-enable */
  }

}
</script>

<style lang='scss' scoped>
.swiper-container{
  width: 100%;
  height: 180px;
}
</style>
<style lang="scss">
.swiper-pagination-bullet{
opacity: 1;
vertical-align: middle;
width: 6px;
height: 6px;
border-radius: 50%;
background-color: hsla(0, 0%, 100%, 0.7);
}
.swiper-pagination-bullet-active{
  width: 20px;
  height: 10px;
  background: url(~@/assets/icon/dot.png) no-repeat;
  background-size: 100%;
}
</style>
