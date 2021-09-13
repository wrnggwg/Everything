<template>
  <div id="app">
    <div id="nav">
      <div id="Top"><img src="../assets/tmall1.png" alt="" id="TopImg"></div>
      <div id="Body">
        <div id="Inner">
          <img src="../assets/tmall2.png" alt="">
          <div id="Form">
            <div id="FormInner"><LoginInput></LoginInput></div>
          </div>
        </div>
      </div>
      <div id="tmallCopyright">
        <p id="footerTmallinfo">
          <a href="" class="footerTop" v-for="item in footerTmallinfo" :key="item.id">{{item.name}}</a> 
        </p>
        <p id="footerOteherlink">
          <a href="" class="footerSec" v-for="item in footerOteherlink" :key="item.id">{{item.name}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LoginInput from '../components/LoginInput/LoginInput.vue'

export default {
  name: 'Login',
  components: {
    LoginInput
  },
  data(){
    return {
      footerOteherlink:[
        {
          id:1,
          name:'阿里巴巴集团'
        },
        {
          id:2,
          name:'淘宝'
        },
        {
          id:3,
          name:'天猫'
        },
        {
          id:4,
          name:'聚划算'
        },
        {
          id:5,
          name:'全球速卖通'
        },
        {
          id:6,
          name:'阿里巴巴国际交易市场'
        },
        {
          id:7,
          name:'1688'
        },
        {
          id:8,
          name:'阿里妈妈'
        },
        {
          id:9,
          name:'飞猪'
        },
        {
          id:10,
          name:'阿里云计算'
        },
        {
          id:11,
          name:'AliOS'
        },
        {
          id:12,
          name:'阿里通信'
        },
        {
          id:13,
          name:'万网'
        },
        {
          id:14,
          name:'高德'
        },
        {
          id:15,
          name:'UC'
        },
        {
          id:16,
          name:'友盟'
        },
        {
          id:17,
          name:'虾米'
        },
        {
          id:18,
          name:'钉钉'
        },
        {
          id:19,
          name:'支付宝'
        },
        {
          id:20,
          name:'阿里安全'
        }
      ],
      footerTmallinfo:[
        {
          id:1,
          name:'关于天猫'
        },
        {
          id:2,
          name:'商家服务大厅'
        },
        {
          id:3,
          name:'开放平台'
        },
        {
          id:4,
          name:'诚聘英才'
        },
        {
          id:5,
          name:'联系我们'
        },
        {
          id:6,
          name:'网站合作'
        },
        {
          id:7,
          name:'法律声明'
        },
        {
          id:8,
          name:'隐私权政策'
        },
        {
          id:9,
          name:'知识产权'
        },
        {
          id:10,
          name:'廉正举报'
        },
        {
          id:11,
          name:'不正当竞争举报'
        }
      ]
    }
  }
}
</script>

<style scoped>
  #app{
    display: block;
    width: auto;
  }
  #nav{
    
  }
  #Top{
    width: 1190px;
    height: 44px;
    margin: auto;
    padding: 22px 0px;
    background-color: white;
  }
  #TopImg{
    width: 190px;
    margin-top: 8px;
  }
  #Body{
    position: relative;
    width: 100%;
    height: 600px;
    margin: auto;
    background-color: rgb(221, 39, 38);
  }
  #Inner{
    position: relative;
    width: 1190px;
    margin: auto;
  }
  #Inner img{
    width: 100%;
  }
  #Form{
    position: absolute;
    width: 350px;
    height: 400px;
    top: 91px;
    right: 60px;
  }
  #FormInner{
    width: 300px;
    height: 320px;
    margin: 0 auto;
    padding: 25px 25px 23px;
    color: #6c6c6c;
    background: white;
  }
  #tmallCopyright{
    margin: auto;
    margin-top: 50px;
    width: 1423px;
    height: 177px;
  }
  #footerTmallinfo{
    margin: auto;
    width: 1190px;
    height: 25px;
  }
  .footerTop{
    margin-right: 7px;
    text-decoration: none;
    color: #6c6c6c;
  }
  #footerOteherlink{
    margin:10px auto;
    width: 1190px;
    height: 25px;
  }
  .footerSec{
    margin-right: 16px;
    text-decoration: none;
    color: #6c6c6c;
  }
</style>
