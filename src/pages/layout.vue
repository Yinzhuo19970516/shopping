<template>
  <div class ='index-wrap'>
    <div class ='index-left'>
      <div class ='index-left-block'>
        <h2>全部产品</h2>
        <div v-for='product in productList' :key='product.id'>
          <h3>{{ product.category }}</h3>
          <ul>
            <li v-for='item in product.list'  :key='item.id'>
            <a :href="item.url">{{ item.name }}</a>
            <span v-if='item.hot==true' class="hot-tag">HOT</span>
            </li>
          </ul>
        </div>
      </div>
      <div class = 'index-left-block lastest-news'>
        <h2>最新消息</h2>
        <ul>
          <li v-for = 'item in news' :key= 'item.id'>
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class ='index-right'>
    <div class = 'swiper-contnent'>
  <swiper :options="swiperOption" >
    <swiper-slide>
      <img src= '@/assets/slideShow/banner_00.jpg' alt = ''>
    </swiper-slide>
    <swiper-slide>
      <img src= '@/assets/slideShow/banner_01.jpg' alt = ''>
    </swiper-slide>
    <swiper-slide>
      <img src= '@/assets/slideShow/banner_02.jpg' alt = ''>
    </swiper-slide>
    <swiper-slide>
      <img src= '@/assets/slideShow/banner_03.jpg' alt = ''>
    </swiper-slide>
    <swiper-slide>
      <img src= '@/assets/slideShow/banner_04.jpg' alt = ''>
    </swiper-slide>
    <swiper-slide>
      <img src= '@/assets/slideShow/banner_05.jpg' alt = ''>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
  <div class= 'index-board-list'>
    <div class = 'index-board-item' v-for = 'board in boardList' :key = 'board.id' :class=" ['index-board-'+board.tag,{'line-last': index%2 !==0}]">
      <div class = 'index-board-item-inner'>
        <h2>{{ board.title}}</h2>
        <p>{{ board.desc}}</p>
        <div class = 'index-board-button'>
          <router-link :to= "{path: '/details/'+board.tag}"  class= 'button'>不错</router-link>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      swiperOption: {
        effect: 'cube',
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      },
      news: [],
      index: 0,
      boardList: [
        {
          title: '星期一',
          desc: '星期一是Monday',
          tag: 'earth'
        },
        {
          title: '星期二',
          desc: '星期二是Thirsday',
          tag: 'loud'
        },
        {
          title: '星期三',
          desc: '星期三是大晴天',
          tag: 'car'
        },
        {
          title: '星期五',
          desc: '星期五是只鸟',
          tag: 'hill'
        }
      ],
      productList: [
        {
          category: '手机应用类',
          list: [
            {
              name: '123',
              url: 'http://www.baidu.com',
              hot: false
            },
            {
              name: '456',
              url: 'http://www.baidu.com',
              hot: true
            },
            {
              name: '789',
              url: 'http://www.baidu.com',
              hot: false
            }
          ]
        },
        {
          category: 'PC产品',
          list: [
            {
              name: '987',
              url: 'http://www.baidu.com',
              hot: false
            },
            {
              name: '654',
              url: 'http://www.baidu.com',
              hot: false
            },
            {
              name: '321',
              url: 'http://www.baidu.com',
              hot: true
            },
            {
              name: '0',
              url: 'http://www.baidu.com',
              hot: false
            }
          ]
        }
      ]
    }
  },
  created () {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.news = res.data.slice(0, 3)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.index-wrap {
  width:1500px;
  text-align: center;
  overflow: hidden;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 3px;
}
.index-left {
  float:left;
  width:300px;
  text-align:left;
}
.index-right {
  float:left;
  width:900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  height:350px;
}
.index-left-block hr {
  margin-bottom:20px;
  height:5px;
  width:100%;
  background:red;
}
.index-left-block h2{
  background: #4fc08d;
  color:#fff;
  padding:10px 15px;
  margin-bottom:20px;
}
.index-left-block h3 {
  padding:0 15px 5px 15px;
  font-weight:bold;
  color:#222;
}
.index-left-block ul {
  margin:-10px;
}
.index-left-block li {
  list-style-type:none;
  margin: 8px 0;
}
a:hover{
  color:red;
  text-decoration: none;
}
a:visted{
  color:purple;
  text-decoration: none;
}
a.active{
  color:red;
}
a:link{
  color:blue;
  text-decoration: none;
}
.index-board-list{
  overflow: hidden;
  margin-top: 15px
}
.index-board-item {
  float:left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding:20px;
  margin-right:20px;
  margin-bottom:20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left:120px;
}
.index-board-car .index-board-item-inner{
  background:url(../assets/logo.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background:url(../assets/logo.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background:url(../assets/logo.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background:url(../assets/logo.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight:bold;
  color:#000;
  margin-bottom:15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height:350px;
}
.hot-tag {
  background: red;
  color:#fff;
}
.new-item {
  display: inline-block;
  width:230px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.swiperimg {
  width:100%;
}
.swiper-contnent {
  margin-top: 20px;
}
.button{
  background: #4fc08d;
  color:#fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
