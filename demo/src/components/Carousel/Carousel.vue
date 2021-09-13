<template>
  <div class="slide-content">
    <div class="slide-view" @mouseover="showLabel" @mouseleave="hideLabel">
      <a href="javascript:;">
        <img class="CarouselImg" v-for="(item,index) in info" :key="index" :src="item" alt="" v-show="n==index">
      </a>
      <span class="Dirl" v-show="isActive" @click="turnLeft">&lt;</span>
      <span class="Dirr" v-show="isActive" @click="turnRight">&gt;</span>
      <ul class="slide-index">
        <li class="slide-label" 
        v-for="(item,index) in info" 
        :key="index" 
        :class="n == index ? 'active' : ''"
        @click="turnPage(index)"
        >{{index+1}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      info:[
        require('../../assets/密 码.png'),
        require('../../assets/手机.png'),
        require('../../assets/用户名.png')
      ],
      n:0,
      isActive:false
    }
  },
  methods:{
    go(){
      setInterval(() => {
        this.n++;
        if(this.n >= this.info.length)
        this.n = 0;
        console.log(this.n)
      }, 3000);
    },
    showLabel(){
      this.isActive = true
    },
    hideLabel(){
      this.isActive = false
    },
    turnPage(index){
      this.n = index
    },
    turnLeft(){
      if(this.n == 0){
        this.n = this.info.length-1
      }
      else this.n--;
    },
    turnRight(){
      if(this.n == this.info.length-1){
        this.n = 0
      }
      else this.n++;
    }
  },
  mounted(){
    this.go();
  }
}
</script>

<style>
.CarouselImg{
  width: 750px;
  height: 291px;
}
.slide-view{
  position: relative;
  width: 100%;
  height: 100%;
}
.Dirl{
  position: absolute;
  top: 130px;
  left: 0;
  font-size: 30px;
  font-weight: 700;
}
.Dirr{
  position: absolute;
  top: 130px;
  right: 0;
  font-size: 30px;
  font-weight: 700;
}
.slide-index{
  position: absolute;
  left: 300px;
  bottom: 10px;
  width: 100%;
  list-style: none;
}
.slide-label{
  display: inline-block;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  background: black;
  font-size: 14px;
  text-align: center;
  color: white;
  border-radius: 20px;
}
.active{
  background: red;
}
</style>