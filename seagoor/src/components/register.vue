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
                <input class="name" id="name" type="text" placeholder="请输入手机号" xigou-validata-methods="required&amp;emailormobile" xigou-validata-errors="请输入用户账号&amp;请填写正确的手机号或者邮箱地址" xigou-validata-enable="true" v-model="username">
          <div class="div_clear_input1"></div>
          </div>
        </div>
        <div class="input_info">
          <div class="div_psw_icon"></div>
          <div class="div_input_box">
              <input class="pwd" id="pwd" type="password" placeholder="请输入密码" v-model="password">
              <div class="div_clear_input2"></div>
          </div>
        </div>
    </div>

    <div class="div_forget_psw">
        <a href="forgetpwd.html">忘记密码</a>
    </div>

    <div class="login-login">
        <div class="loginBtnClass" id="loginBtnID" @click="handleClick">{{name}}</div>
    </div>

  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'register',
  computed:{
  name(){
  return this.$route.params.conName
  }
  },
  data () {
    return {
      username:'',
      password:'',
    }
  },
  methods:{
  handleClick(){
  console.log(this.name)
    if(this.name==="登录"){
      var that = this;
      axios.post('/api/login/getAccount', {
        username: that.username,
        password: that.password
        }).then(function(res) {
        console.log(res)
          if(res.data.code===1) {
              //that.$store.dispatch('setUser', that.user);
              //localStorage.setItem('user', that.user);
              that.$router.push({name: 'home'});
            }else{
            console.log(res.data.message);
            }
            }).catch(function(err) {
                console.log(err);
            })
    }else if(this.name==="注册"){
      var that = this;
      console.log(that.username);
      console.log(that.password)
      axios.post('/api/login/createAccount', {
      username: that.username,
      password: that.password
        }).then(function (res) {
        console.log(res)
            if(res.data.code===1) {
                location.href = '/#/register';
            } else {
                if(res.data.code === -99) {
                console.log(res.data.message);
                }
            }
          }).catch(function (error) {
            console.log(error);
          });
    }
  }
  },
  mounted(){
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
