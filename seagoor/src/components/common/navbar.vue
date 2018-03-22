<template>
  <div>
      <section>
        <ul>
            <router-link to="/home" tag="li" >
              <img src="/img/index/newYear_2.png">
              <p>首页</p>
            </router-link>
            <router-link to="/range" tag="li" >
              <img src="/img/index/newYear_0.png">
              <p>分类</p>
            </router-link >
            <router-link to="/shoppingcar" tag="li">
              <img src="/img/index/newYear_1.png">
              <p>购物车</p>
            </router-link >
            <router-link to="/personal" tag="li">
              <img src="/img/index/newYear_8.png">
              <p>个人中心</p>
            </router-link>
        </ul>
      </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:'navbar',

    data(){
      return {

      }
    }
  }




</script>


<style lang="scss" scoped>
  ul{
    height: 50px;
    background-color: #f9f9f9;
    background: url(/img/newYear_bottom.png) no-repeat center bottom;
    background-size: 100% 50px;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    justify-content:space-around;

    li{
      text-align: center;
      height: 50px;
      color:#fff;
      font-size:12px;
      img{
        height:20px;
        margin-top:10px;
      }
    }
  }
</style>