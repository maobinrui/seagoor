<template>
  <div class="register">
    <div class="ui-header">
    <h1>{{name}}</h1>
    <router-link href="" class="goBack" to="/login" tag="a"></router-link>
    </div>
    <div class="input_info_list">
        <div class="input_info">
          <div class="div_tel_icon"></div>
          <div class="div_input_box">
                <input class="name" id="name" type="text" placeholder="请输入手机号" xigou-validata-methods="required&amp;emailormobile" xigou-validata-errors="请输入用户账号&amp;请填写正确的手机号或者邮箱地址" xigou-validata-enable="true">
          <div class="div_clear_input1"></div>
          </div>
        </div>
        <div class="input_info">
          <div class="div_psw_icon"></div>
          <div class="div_input_box">
              <input class="pwd" id="pwd" type="password" placeholder="请输入密码">
              <div class="div_clear_input2"></div>
          </div>
        </div>
    </div>

    <div class="div_forget_psw">
        <a href="forgetpwd.html">忘记密码</a>
    </div>

    <div class="login-login">
        <div class="loginBtnClass" id="loginBtnID"><span>{{name}}</span></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"  scoped>
.register{
  position:absolute;
  width:100%;
  height:100%;
  background:#f4f4f4;
  z-index:200;
  a{
    color: #929292;
    text-decoration: none;
  }
  .ui-header, .rule-header {
    top: 0;
    height: 45px;
    line-height: 45px;
}
  .ui-header {
    border: 0;
    border-bottom: 1px solid #929292;
    background-color: #fff;
    h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    }
    .goBack {
    display: block;
    position: absolute;
    width: 44px;
    line-height: 45px;
    height:45px;
    top: 0;
    left: 0;
    background: url(/img/back.png) no-repeat center;
    background-size: 10px;
    }
  }
  .input_info_list {
    margin-top: 8px;
    background-color: #fff;
    font-size: 15px;
    color: #333;
    .input_info {
    height: 50px;
    display: -webkit-box;
    .div_tel_icon {
    width: 37px;
    background: url(/img/logon/use.png) 10px center no-repeat;
    background-size: 17px;
    }
    .div_psw_icon {
    width: 37px;
    background: url(/img/logon/psw.png) 10px center no-repeat;
    background-size: 17px;
    }
    .div_input_box {
    -webkit-box-flex: 1;
    margin-left: 10px;
    position: relative;
      input {
      width: 100%;
      height: 49px;
      border: 0;
      border-bottom: 1px solid #e8e8e8;
      font-size:15px;
      outline:none;
      }
      .div_clear_input1 {
          position: absolute;
          right: 10px;
          top: 0;
          bottom: 0;
          width: 15px;
          background: url(/img/classify/clear-a.png) center no-repeat;
          background-size: 15px;
          display: none;
      }
      .div_clear_input2 {
          position: absolute;
          right: 10px;
          top: 0;
          bottom: 0;
          width: 15px;
          background: url(/img/classify/clear-a.png) center no-repeat;
          background-size: 15px;
          display: none;
      }
    }

  }
}
.div_forget_psw {
    position: relative;
    height: 43px;
    a {
    display: block;
    position: absolute;
    right: 0;
    width: 72px;
    top: 0;
    bottom: 0;
    color: #666;
    font-size: 13px;
    line-height: 43px;
  }
}
.loginBtnClass {
    height: 44px;
    margin: 0 10px;
    background-color: #333;
    font-size: 17px;
    color: #fff;
    line-height: 44px;
    text-align: center;
    border-radius: 5px;
}


}

</style>
