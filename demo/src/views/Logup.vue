<template>
  <div id="page">
      <div id="top">
          <ol>
              <li class="Active">
                  <i>1</i>
                  <span>设置用户名</span>
              </li>
              <li>
                  <i>2</i>
                  <span>填写账号信息</span>
              </li>
              <li>
                  <i>3</i>
                  <span>设置支付方式</span>
              </li>
              <li>
                  <i>√</i>
                  <span>注册成功</span>
              </li>
          </ol>
      </div>
      <div id="content">
          <form action="#" id="mobileForm" method="post">
              <div id="mobile">
                  <span id="numbersLabel">手机号码</span>
                  <div id="Position">
                      <span>中国大陆</span>
                      <span style="margin-left:40px">+86</span>
                      <i id="positionLabel">&gt;</i>
                  </div>
                  <input placeholder="请输入你的手机号码" id="numberInput">
              </div>
              <div id="check">
                  <span id="checkLabel">验证</span>
                  <div id="checkSlide">
                      <div id="slideBox">&gt;&gt;</div>
                      请按住滑块，拖动到最右边
                  </div>
              </div>
              <button id="btn">下一步</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'page',
    data(){
        return {
            info:['设置用户名','填写账号信息','设置支付方式','注册成功'],
        }
    }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#page{
  position: relative;
  width: auto;
  min-width: 1190px;
  font-size: 12px;
}
#top{
    width: 990px;
    height: 48px;
    margin: auto;
    border-bottom: 2px solid #9999;
}
#top ol{
    width: 990px;
    height: 38px;
    padding-top: 10px;
    padding-left: 120px;
    list-style: none;
}
.Active{
    border-bottom: 2px solid red;
    
}
.Active i{
    background-image: url('../assets/tmall4.png');
}
#top ol li{
    display: inline-block;
    text-align: center;
    width: 180px;
    height: 38px;
}
#top ol li i{
    display: inline-block;
    padding-top: 2px;
    margin-right: 5px;
    width: 24px;
    height: 22px;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    background: #9999;
    color: white;
    border-radius: 12px;
}
#top ol li span{
    padding-top: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #9999;
}

#content{
    padding: 60px 0;
    margin: auto;
    width: 990px;
    height: 200px;
}
#mobileForm{
    margin: auto;
    width: 720px;
    height: 200px;
}
#mobile{
    margin: auto;
    padding: 10px 0;
    padding-bottom: 0;
    width: 720px;
    height: 57px;
}
#numbersLabel{
    display: inline-block;
    position: relative;
    top: 5px;
    margin-left: 175px;
    font-size: 14px;
    color: #9999;
}
#Position{
    display: inline-block;
    margin-left: 20px;
    width: 162px;
    height: 32px;
    border: 1px solid #9999;
}
#Position span{
    position: relative;
    top: 5px;
    left: 10px;
    font-size: 14px;
}
#positionLabel{
    display: inline-block;
    position: relative;
    top: 5px;
    margin-left: 19px;
    font-style: normal;
    transform: rotate(90deg);
    font-weight: 700;
    font-size: 14px;
}
#numberInput{
    position: relative;
    padding-left: 10px;
    top: 6px;
    width: 152px;
    height: 32px;
    border: 1px solid #9999;
    font-size: 14px;
}
#check{
    margin: auto;
    padding: 0;
    width: 720px;
    height: 57px;
}
#checkLabel{
    position: relative;
    top: -10px;
    margin-left: 200px;
    font-size: 14px;
    color: #9999;
}
#checkSlide{
    display: inline-block;
    position: relative;
    margin-left: 20px;
    padding-left: 80px;
    padding-top: 8px;
    width: 220px;
    height: 24px;
    color: #9999;
    background: rgb(237 237 237);
    border: 1px solid #9999;
}
#slideBox{
    position: absolute;
    padding-top: 3px;
    top: 0px;
    left: -1px;
    width: 42px;
    height: 29px;
    background: white;
    border: 1px solid #9999;
    font-size: 16px;
    text-align: center;
    color: gray;
}
#btn{
    margin-left: 250px;
    width: 180px;
    height: 36px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border: 0;
    border-radius: 3px;
}
</style>