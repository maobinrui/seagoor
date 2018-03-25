<template>
  <div class="login">
    <div class="logo_top">
      <router-link class="close"  to="/home" tag="div"></router-link>
      <router-link class="logon_bg" to="/home" tag="div"></router-link>
      <div class="logon_name">
      </div>
    </div>
    <div class="logBottom">
        <div class="div_login">
          <router-link :to="{ name: 'register', params: { conName: '登录' }}">手机登录</router-link>
        </div>
        <div class="div_register">
          <router-link :to="{ name: 'register', params: { conName: '注册' }}">手机注册</router-link>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  //router.push(`/register/${name}`);
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"  scoped>
.login{
  position:absolute;
  width:100%;
  height:100%;
  background:#f4f4f4;
  z-index:200;
  a {
    color: #929292;
    text-decoration:none;
  }
  .logo_top{
    height: 222px;
    width: 100%;
    background: url(/img/logon/logo_top.png) center no-repeat;
    background-size: 100%;
    position: relative;
    .close {
    position: absolute;
    right: 25px;
    top: 25px;
    width: 26px;
    height: 25px;
    background: url(/img/logon/close.png) center no-repeat;
    background-size: 26px;
    }
    .logon_bg {
    position: absolute;
    top: 45%;
    height: 100px;
    left: 0;
    right: 0;
    background: url(/img/logon/logo.png) center no-repeat;
    background-size: 100px;
    }
    .logon_name {
    height: 35px;
    background: url(/img/logon/logo_name.png) center no-repeat;
    background-size: 170px;
    position: absolute;
    top: 220px;
    left: 0;
    right: 0;
    }
  }
  .logBottom {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    height: 100px;
    .div_login {
      margin-bottom: 10px;
      a{
            display: block;
      width: 274px;
      height: 100%;
      margin: 0 auto;
      background-color: #333;
      border-radius: 44px;
      font-size: 16px;
      color: #fff;
      line-height: 44px;
      text-align: center;
      }
    }
    .div_register>a {
    display: block;
    width: 274px;
    height: 100%;
    margin: 0 auto;
    border-radius: 44px;
    border: 1px solid #333;
    font-size: 16px;
    color: #333;
    line-height: 44px;
    text-align: center;
    }
  }
}



</style>
