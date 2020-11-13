<template>
   <div class = 'page-city'>
     <header-type title='城市' :isShow="false"></header-type>
    <div class = 'city-main'>
      <div class = 'left' ref = 'scrollLeft'>
       <div>
          <div>
            <p>hjj</p>
            <ul>
              <li>vbcb</li>
              <li>vbcb</li>
            </ul>
          </div>
       </div>
      </div>
      <div class = 'right'>
        <ul>
          <li>fgdgd</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderType from '~@/assets/components/HeaderType/index.vue'
import HeaderType from '../../components/HeaderType/index.vue'
export default {
  name: 'City',
  components: {
    HeaderType
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/mincss.scss';
.page-city{
  display: flex;
  flex-direction: column;
  height: 100%;
  .city-main {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  .left{
    flex: 1;
    height: 100%;
    position: relative;
    .city-index-section{
      @include border-bottom;
      padding-left: 15px;
      p{
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li{
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }
  .right{
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    li{
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
