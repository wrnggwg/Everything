<template>
  <div class="mallPage">
    <div id="Nav"><img src="../assets/Top.jpg" alt=""></div>
    <div id="siteNav">
      <div id="snBd">
        <div id="snBkHome">
          <img src="../assets/首页-选中.png" alt="">
          <a href="script:;">天猫首页</a>
          <em style="font-style:normal;color:#999;margin-left:15px">喵，欢迎来天猫</em>
          <a class="snBkHomeLink" href="script:;" @click="linkLogin()">请登录</a>
          <a class="snBkHomeLink" href="script:;" @click="linkLogup()">免费注册</a>
          <a style="margin-left:420px" href="script:;">我的淘宝</a>
          <img style="margin-left:30px" src="../assets/购物车.png" alt="">
          <a style="margin-left:5px" href="">购物车</a>
          <a style="margin-left:20px" href="">收藏夹</a>
          <img style="margin-left:20px" src="../assets/手机.png" alt="">
          <a href="">手机版</a>
          <a style="margin-left:20px" href="">淘宝网</a>
          <a style="margin-left:20px" href="">商家支持</a>
          <img style="margin-left:20px" src="../assets/导航.png" alt="">
          <a href="">网站导航</a>
        </div>
      </div>
    </div>
    <div id="header">
      <div id="headerLayout">
        <div id="headerImg"><img src="../assets/tmall3.png" alt=""></div>
        <div id="areaSelect">
          重庆
          <div id="areaArr">&gt;</div>
        </div>
        <div id="mallSearch">
          <form id="searchTop">
            <input type="text" placeholder="搜索天猫超市商品" id="GoodsSearch">
            <button id="SearchBtn">搜索</button>
          </form>
          <ul></ul>
        </div>
        <div id="headerBanner"></div>
      </div>  
    </div>
    <div id="content">
      <div id="tmNav">
        <div id="layout">
          <div id="cat">所有产品分类</div>
          <div id="navCont">
            <ul>
              <li id="index">首页</li>
              <li id="qycg">企业采购</li>  
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="fs">
      <div id="categoryLoaded">
          <ul id="catBd">
            <li v-for="item in info" :key="item"><CatBd></CatBd></li>
          </ul>
      </div>
      <div id="courtyard">
        <div id="Carousel"><Carousel></Carousel></div>
        <div id="tmallMarkets">
          <div id="row1">
            <div class="row1Item" style="background:red"></div>
            <div class="row1Item" style="background:aqua"></div>
            <div class="row1Item" style="background:red"></div>
          </div>
          <div id="row2">
            <div class="row2Item" style="background:red"></div>
            <div class="row2Item" style="background:aqua"></div>
            <div class="row2Item" style="background:red"></div>
          </div>
        </div>
      </div>
      <div id="chaoshiSidebar">
        <a class="sidebarItem" href="javascript:;" v-for="item in sidebar" :key="item"><img :src="item.src" alt=""></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.mallPage{
  position: relative;
  width: auto;
  min-width: 1190px;
  font-size: 12px;
}
#Nav{
  height: 100px;
  width: auto;
  background: orange;
}
#Nav img{
  width: 80%;
  height: 100%;
  margin-left: 10%;
}
#siteNav{
  width: auto;
  height: 26px;
  background: #f2f2f2;
  border-bottom: 1px solid #e5e5e5;
}
#snBd{
  width: 1190px;
  margin: auto;
}
#snBd img{
  padding-top: 7px;
  width: 12px;
  height: 12px;
}
#snBkHome{
  float: left;
}
#snBkHome a{
  margin-left: 5px;
  
}
a:link{
  color: #999;
  text-decoration: none;
}
a:visited{
  color: #999;
  text-decoration: none;
}
a:hover{
  color: red;
  text-decoration: underline;
}
.snBkHomeLink{
  margin-left:15px;
  text-decoration:none;
}
#headerLayout{
  width: 1190px;
  height: 96px;
  margin: auto;
}
#headerImg{
  display: inline-block;
  width: 240px;
}
#headerLayout img{
  width: 140px;
  height: auto;
  margin-top: 10px;
  padding-left: 40px;
  padding-top: 16px;
}
#headerBanner{
  display: inline-block;
  width: 240px;
  height: auto;
  padding-left: 15px;
  padding-top: 25px;
}
#areaSelect{
  display: inline-block;
  position: relative;
  padding-top: 3px;
  top: -30px;
  left: 0px;
  width: 75px;
  height: 32px;
  border: 1px solid #999;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #30b30e;
}
#areaArr{
  display: inline-block;
  position: relative;
  top: 2px;
  transform: rotate(90deg);
  font-size: 20px;
  font-weight: 700;
}
#mallSearch{
  display: inline-block;
  position: relative;
  top: -28px;
  left: 60px;
  width: 540px;
  height: 61px;
}
#searchTop{
  width: auto;
  height: 30px;
  border: 3px solid #30b30e;
}
#GoodsSearch{
  width: 82%;
  height: 98%;
  border: 0;
  padding-left: 10px;
}
#SearchBtn{
  width: 86px;
  height: 100%;
  border: 0;
  background: #30b30e;
  color: white;
}
#content{
  width: 1190px;
  margin: auto;
  
}
#tmNav{
  width: 1190px;
  height: 36px;
  border-bottom: 1px solid black;
}
#layout{
  display: block;
  margin: 0;
  padding: 0;
  width: 1190px;
  height: 36px;
}
#cat{
  display: inline-block;
  padding-top: 7px;
  width: 240px;
  height: 29px;
  background: #2f2f2f;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}
#navCont{
  display: inline-block;
  width: 950px;
  height: 36px;
}
#navCont ul{
  list-style: none;
}
#index{
  display: inline-block;
  width: 82px;
  height: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  border-right: 1px solid rgba(230, 230, 230, 0.6);
}
#qycg{
  display: inline-block;
  padding-left: 10px;
  width: 82px;
  height: 36px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
#fs{
  position: relative;
  width:1190px;
  margin: auto;
}
#categoryLoaded{
  display: inline-block;
  position: relative;
  top: -40px;
  width: 238px;
  height: 585px;
  border:1px solid #3c3c3c;
}
#catBd{
  display: inline-block;
  width: 238px;
  height: 585px;
}
#catBd li{
  display: inline-block;
  width: 100%;
  height: 12%;
  list-style: none;
}
#courtyard{
  display: inline-block;
  position: relative;
  width: 750px;
  height: 585px;
}
#Carousel{
  display: inline-block;
  width: 100%;
  height: 291px;
}
#tmallMarkets{
  width: 750px;
  height: 292px;
}
#row1{
  width: 750px;
  height: 120px;
  position: relative;
}
.row1Item{
  display: inline-block;
  width: 250px;
  height: 120px;
  
}
#row2{
  width: 750px;
  height: 172px;
  position: relative;
}
.row2Item{
  width: 250px;
  height: 172px;
  display: inline-block;
}
#chaoshiSidebar{
  display: inline-block;
  margin-left: 10px;
  width: 190px;
  height: 342px;
  position: absolute; 
}
.sidebarItem{
  display: inline-block;
  width: 190px;
  height: 171px;
}
.sidebarItem img{
  width: 100%;
  height: 100%;
}
</style>
<script>
import CatBd from '../components/CatBd/CatBd.vue'
import Carousel from '../components/Carousel/Carousel.vue'
export default {
  name : "mallPage",
  components: {
    CatBd,
    Carousel
  },
  methods:{
    linkLogin(){
      this.$router.push('/login');
    },
    linkLogup(){
      this.$router.push('/logup')
    },
    Active(){
      this.ActiveColor='red'
    },
    Passive(){
      this.ActiveColor=''
    }
  },
  data(){
    return {
      ActiveColor:'',
      info:['进口食品','食品饮料','粮油副食','美容洗护','家居家电','家庭清洁','母婴用品','生活服务'],
      sidebar:[{
        name: '休食',
        src: require('../assets/密 码.png')
      },{
        name: '粮油',
        src: require('../assets/手机.png')
      }]
    }
  }
}
</script>
