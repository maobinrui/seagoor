<template>
  <div class="detail">
    <header id="header" class="">
    <a href="/"></a>
    <h1>商品详情</h1>
    <div class="kf_btn">

    </div>

    </header><!-- /header -->
    <div class="con">
      <div class="slider">
        <swipe class="my-swipe">
            <swipe-item v-for="data in swipeurl" :key="data.id" >
              <img :src='data' />
            </swipe-item>
        </swipe>
        <a href="" class="more_details"></a>

      </div>
      <section>
        <p class="iem-p">
          <span  class="iem-price1" id="iem-price">¥<span class="iem-price2" >{{Math.round(datas.price)}}</span>.00</span>
        </p>
        <p class="space_price_div">
          <span>
          <del id="old_price">¥{{datas.oldprice}}</del>
          </span>
          <span id="fy_price" style="display: none;">返佣:<span></span></span>
          <span class="sale-count"> {{datas.salescountdesc}} </span>
        </p>
        <p class="dec-title">{{datas.name}} </p>
        <p class="dec-info"> {{datas.feature}} </p>
        <p class="country clearfix">
          <img id="contry-img" src="http://basedata.qn.seagoor.com/1453272122445.jpg?imageView2/0/w/30"><!-- {{data.countryimg}} -->
          <span class="country-name">{{datas.countryname}}</span>
          <span class="warehouse">{{datas.channel}}</span>
          <span class="warehouse"></span>
          <span class="fee-icon"></span>
          <span class="fee">税费</span>
        </p>
        <div id="selectSizeColor">
          <h2>
          选择: <span id="size_color">数量1</span>
          <span class="more_size"></span>
          </h2>
        </div>
        <div class="div_desc">
          <span class="more_size"></span>
        </div>
      </section>
      <div class="div_detail">
<div class="div_show_detail down"></div>
<div class="detail-content" style="display: block;" v-html="datas.detail">{{datas.detail}}<div>
</div><div style="width:100%; height: 50px; float: left;"></div></div>
</div>
    </div>
<!-- -----------------------------------footer-------------------------------------- -->
    <footer>
      <ul>
        <li class="item-shopcar ui-badge-wrap" style="border-left:none;">
          <div class="imgbox">
            <router-link to="/shoppingcar" tag="a"> 购物车
              <div class="ui-badge">0</div>
            </router-link>
          </div>
        </li>
        <li class="item-addshop" @click="handelclick"><a class="item-addshop-text">加入购物车</a></li>
        <li class="item-buy"><a class="item-buy-text">立即购买</a></li>
        <li class="item-none" style="display: none">已抢光</li>
      </ul>
    </footer>
  </div>

</template>

<script>
import axios from "axios"
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import { Indicator } from 'mint-ui';
import router from "../router";
export default {
  name: 'detail',
  data () {
    return {
        swipeurl:[],
        datas:[],
        imgList:[],
        shopdata:[]
    }
  },

    mounted(){
            console.log(this.$route.params);
            axios.get(`product/detail.htm?sku=${this.$route.params.sku}&tid=${this.$route.params.tid}&shopmobile=null&oem=IOS&scheme=http&osversion=1.1.0&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou`).then(res=>{

                this.swipeurl=res.data.data.imglist;
                this.datas = res.data.data;
                this.imgList = res.data.data.detail;
                var arr = this.imgList.split("src=");
                this.shopdata=res.data
                console.log(this.shopdata );

            }).catch(error=>{
            })
},
methods:{
  handelclick(){
    this.$store.commit("shoppingMutation",this.shopdata )
  }
},
components:{
            'swipe':Swipe,
            'swipe-item':SwipeItem
        }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component on
ly -->
<style   lang="scss"  scoped>
body{
  background:#eeeeeee;
}
header{
  display:flex;
  width:100%;
  height:50px;
  background:#fff;
  border-bottom: #ccc 1px solid;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  a{
    display: block;
    position: absolute;
    width: 44px;
    height: 50px;
    top: 0;
    left: 0;
    background: url(/img/back.png) no-repeat center;
    background-size: 10px;
  }
  h1{
    line-height: 55px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
    flex:1;
    font-weight:400;
    }
  .kf_btn {
  /* float: right; */
  position: absolute;
  right: 0;
  width: 44px;
  height: 50px;
  background: url(/img/home/call.png) no-repeat center;
  background-size: 18px;
  }
}
.con {
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 13px;
    margin-top: 51px;
    margin-bottom: 10px;
    background:#fff;
    .slider {
    position: relative;
    padding-top: 100%;
    background: url(/img/index/loading_banner.png) no-repeat center;
    background-size: 100%;
      .my-swipe {
      /* display: -webkit-box; */
      position: absolute;
      left: 0;
      top: 0;
      width:100%;
      height: 100%;
      img{
        display:block;
        width:100%;
        height:100%;
      }
      /* z-index:1; */


        }
      swipe-item{
        width:100%;
        height: 100%;
        img{
          width:100%;
          height: 100%;
          display:block;
        }
      }
      .more_details{
        background:url(/img/item/details.png) no-repeat;
        background-size:51px 51px;
        position:absolute;
        width:51px;
        height:51px;
        right:20px;
        bottom:32px;
      }
  }
  section{
    padding: 0 12px;
    .iem-p{
      .iem-price1{
        color: #f57684;
        font-size: 17px;
        font-weight: 700;
        .iem-price2{
          font-size: 26px;
          font-weight: 400;
        }
      }
    }
    .space_price_div {
      padding: 10px 0;
      border-bottom: 1px solid #e8e8e8;
      padding-top: 0;
        #old_price {
        font-size: 14px;
        color: #999;
        }
        .sale-count {
          float: right;
          font-size: 13px;
          color: #999;
      }
    }
  }
  .dec-title {
    margin: 10px 0;
    margin-top: 17px;
    font-weight: 700;
    max-height: 48px;
    overflow: hidden;
    font-size: 15px;
    color: #333;
    }
    .dec-info {
        font-size: 13px;
        color: #999;
    }
    .country {
    padding: 10px 0;
      #contry-img {
      display: inline;
      vertical-align: middle;
      width: 22px;
      height: 22px;
      border-radius: 22px;
      }
      .country-name {
        padding: 2px 5px;
        line-height: 30px;
    }
    .warehouse {
    padding: 2px 0;
    line-height: 30px;
    }
    .fee-icon {
    float: right;
    display: block;
    width: 30px;
    height: 30px;
    background: url(/img/fee.png) no-repeat center;
    background-size: 22px;
    }
    .fee {
    float: right;
    margin-right: 3px;
    line-height: 20px;
    font-size: 13px;
    padding-top: 5px;
    color: #666;
    border-bottom: 1px solid #ccc;
    }
  }
  #selectSizeColor {
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 0;
    h2 {
    font-size: 14px;
    color: #999;
      #size_color {
      font-size: 14px;
      color: #333;
    }
      .more_size {
      background: url(/img/item/arrow-in.png) center right no-repeat;
      background-size: 7px 12px;
      width: 100%;
      position: absolute;
      height: 22px;
      right: 10px;
      }

    }
  }
  .div_desc {
    padding: 12px 0;
    height: 19px;
    background: url(/img/item/descNew.png) left no-repeat;
    background-size: 90% 19px;
    .more_size {
    background: url(/img/item/arrow-in.png) center right no-repeat;
    background-size: 7px 12px;
    width: 100%;
    position: absolute;
    height: 22px;
    right: 10px;
  }
}
.div_detail {
    background-color: #fff;
    margin-bottom: 50px;
}
  .div_show_detail {
    font-size
:
13px;
    color: #333;
    position: relative;
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
    .down:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(/img/item/down1.png) center no-repeat;
    background-size: auto 12.5px;
  }
    .detail-content{
      img{
        display:block;
      }
    }

}

footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #f9f9f9;
    z-index: 200;
    font-size: 12px;
    height: 51px;
    ul{
      border-top: 1px solid #ccc;
      height:50px;
      width:100%;
      display:flex;
      li{
        height:50px;
        a{
          text-decoration:none;
          display:block;
        }
      }
      .item-shopcar{
      width:70px;
        .imgbox{
          width: 40px;
          height: 40px;
          margin: 5px auto;
          position: relative;
          background: url(/img/item/shopcar-normal1.png) center 2px no-repeat;
          background-size: 23px;
          line-height: 68px;
          a{
            color: #929292;
            width:100%;
            height:100%;
          }
        }
      }
      .item-addshop{
        border-left: 1px solid #ccc;
        .item-addshop-text{
          width:148px;
          boeder:none;
          background:#f9f9f9;
          width:148px;
          height:100%;
          text-align:center;
          color:#ee3e54;
          line-height:50px;
          font-size: 16px;
        }
      }
      .item-buy{
        flex:1;
        border-left: 1px solid #ccc;
        .item-buy-text{
          width:100%;
          height:50px;
          line-height:50px;
          background:#ee3e54;
          font-size: 16px;
          color:#fff;
          text-align:center;
        }
      }


    }

}

</style>
