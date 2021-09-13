<template>
  <div id="cat_bd">
    <h3>
      <div id="Img"></div>
      <a href="javascript:;">进口食品</a>
    </h3>
    <p>
      <a href="javascript:;" v-for="item in info" :key="item">{{item}}</a>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      info:['牛奶','零食','饼干','方便面','粮油']
    }
  }
}
</script>

<style scoped>
#cat_bd{
  padding: 19px 0;
  margin: auto;
  width: 210px;
  height: 34px;
  border-bottom: 1px solid gray;
}
#Img{
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid gray;
}
a{
  display: inline-block;
  margin-left: 10px;
  width: 56px;
  height: 16px;
  font-size: 14px;
  font-weight: 700;
}
a:link{
  color: #515151;
  text-decoration: none;
}
p{
  margin-left: 20px;
}
p a{
  width: auto;
  font-size: 12px;
  color: #999;
}
</style>