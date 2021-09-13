<template>
  <div id="bk">
      <div id="hd">
          <div id="InputBox">
            <div id="InputChose">
              <a href="javascript:;" class="Chose whichChose">密码登录</a>
              <a href="javascript:;" class="Chose">短信登录</a>
            </div>
            <form  id="loginForm" class="InputForm" action="">
              <div class="inputFiled">
                <div class="inputLabel"><img src="../../assets/用户名.png" alt=""></div>
                <div class="inputArea"><input type="text" class="inputText" placeholder="会员名/邮箱/手机号"></div>
              </div>
              <div class="inputFiled">
                <div class="inputLabel"><img src="../../assets/密 码.png" alt=""></div>
                <div class="inputArea"><input type="text" class="inputText" placeholder="请输入登录密码"></div>
              </div>
              <div class="inputFiled">
                <button id="FormBtn">登录</button>
              </div>
              <div id="FormLink">
                <a href="javascript:;" class="FormLinkItem" style="margin-left:120px;">忘记密码</a>
                <a href="javascript:;" class="FormLinkItem">忘记用户名</a>
                <a href="javascript:;" class="FormLinkItem" @click="linkLogup()">免费注册</a>
              </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    linkLogup(){
      this.$router.push('/logup')
    },
  }
}
</script>

<style scoped>
#hd{
    padding: 0px;
    background: white;
    position: relative;
}
#InputBox{
  width: 300px;
  height: 250px;
}
.Chose{
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  color: black;
}
.whichChose{
  border-bottom: 2px solid black;
}
#loginForm{
  margin-top: 20px;
  width: 300px;
  height: 200px;
}
.inputFiled{
  width: 300px;
  height: 42px;
  margin-bottom: 20px;
}
.inputLabel{
  position: absolute;
  margin-top: 2px;
  margin-left: 2px;
  width: 40px;
  height: 40px;
  background: #ccc;
  
}
.inputLabel img{
  padding: 20%;
  width: 60%;
  height: 60%;
}
.inputArea{
  width: 300px;
  height:42px;
}
.inputText{
  width: 248px;
  height: 42px;
  padding-left: 50px;
  font-size: 14px;
  border: 1px solid #f1eeee;
}
#FormBtn{
  width: 300px;
  height: 42px;
  text-align: center;
  background: red;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  font-size: 16px;
}
#FormLink{
  width: 300px;
  height: 18px;
}
.FormLinkItem{
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  text-decoration: none;
  color: #6c6c6c;
  text-align: right;
}
</style>