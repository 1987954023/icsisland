<template>
  <div class='header'>
    <header-type :title="$route.query.name" :isShow="false"></header-type>
     <section class="cartoon-list search-result-list" ref='search'>
       <div>
        <div class="list-item" v-for='item in searchbookList' :key='item.id'>
          <div class="item-pic" v-lazy:background-image="item.coverurl"></div>
          <div class="item-info">
            <div class="info-book font-30">{{item.name}}</div>
            <div class="info-author font-26">作者：{{item.author}}</div>
            <div class="info-fans font-26">更新：{{item.lastpartname}}</div>
          </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import HeaderType from '../../components/HeaderType/index.vue'
import { searchbookauthor } from '../../api/cartoon'
import BScroll from 'better-scroll'
export default {
  name: 'SearchResult',
  data () {
    return {
      searchbookList: []
    }
  },
  components: {
    HeaderType
  },
  methods: {
    searchbookauthors (payload) {
      searchbookauthor(payload).then(res => {
        // console.log(res)
        if (res.code === 200) {
          this.searchbookList = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        alert('网络错误' + err)
      })
    }
  },
  created () {
    this.searchbookauthors(this.$route.query.name)
    // console.log(this.$route.query.name)
  },
  mounted () {
  /*eslint-disable*/
  this.bscroll=new BScroll(this.$refs.search,{
    click:true
  })
   /* eslint-enable */
  }
}
</script>

<style lang='scss' scoped>
.header{
  display: flex;
  flex-direction: column;
  height: 100%;
  section{
    flex: 1;
    padding-left: 10px;
    margin: 10px 0px;
     overflow: auto;
    .list-item{
      display: flex;
      box-sizing: border-box;
      align-items: center;
      height: 124px;
      border-bottom: 1px solid #dbd9dc;
      position: relative;
      .item-pic{
        flex-shrink: 0;
        width: 80px;
        height: 106px;
        border-radius: 3px;
        margin-right: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
      }
      .item-info{
        flex: 1;
        margin-left: 10px;
        color: #999;
        overflow: hidden;
        .info-book,
        .info-author
        .info-fans{
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
         .info-book {
        color: #333;
       }
         .info-book,
         .info-author {
          margin-bottom: 20px;
      }
      }
    }
  }

}
</style>
