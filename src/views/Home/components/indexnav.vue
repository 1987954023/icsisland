<template>
   <nav class="index-nav">
    <router-link to="/classify">
      <div class="nav-item">
        <img src='@/assets/icon/4.png'/>
        <p class="nav-text font-24">分类</p>
      </div>
    </router-link>
    <router-link to='/ranking'>
      <div class="nav-item">
        <img src='@/assets/icon/3.png'/>
        <p class="nav-text font-24">排行</p>
      </div>
    </router-link>
    <router-link to='/vip'>
      <div class="nav-item">
        <img src='@/assets/icon/2.png'/>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </router-link>
    <router-link to='/hello/history'>
      <div class="nav-item">
        <img src='@/assets/icon/1.png'/>
        <p class="nav-text font-24">历史</p>
      </div>
    </router-link>
   </nav>
</template>

<script>
export default {
  name: 'indexnav'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/mincss.scss';
  .index-nav{
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100px;
    .nav-item{
      img{
      width: 52px;
      line-height: 1.2;
    }
    p{
    color: #8d8d8d;
    font-weight: 500;
    text-align: center;
  }

}
  }
</style>
