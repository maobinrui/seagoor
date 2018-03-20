<template>
  <div>
      <header class="headbar">
        <div>
          <a href="">
            <img src="/img/indexScan.png">
          </a>
        </div>
        <p></p>
        <div>
          <a href="classify.html?fromPage=index">
            <img src="/img/indexSearch.png">
          </a>
        </div>
      </header>
      <swipe class="my-swipe">
          <swipe-item v-for="data in looplist" :key="data.id">
            <img :src='data' />
          </swipe-item>
      </swipe>
  </div>
</template>

<script>
import axios from "axios"
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import { Indicator } from 'mint-ui';
export default {

  data () {
    return {
        looplist:[],
        swipeurl:''
    }
  },

  mounted(){

            //Indicator.open('加载中...');


            axios.get("index/module.htm?&oem=AM&scheme=http&osversion=1.1.0&screenwidth=320&screenheight=495&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{

                this.datas=res.data.data.banners;
                for (var i = 0; i < this.datas.length; i++) {
                   this.looplist.push( this.datas[i].imageurl);
                    //console.log(this.looplist);
                };


            }).catch(error=>{

            })

},

components:{
            'swipe':Swipe,
            'swipe-item':SwipeItem
        }
}
</script>

<style lang="scss" scoped>
    .headbar{
        display:flex;
        justify-content:space-between;
        height:46px;
        line-height:46px;
        margin-left:10px;
        margin-right:10px;
        p{
            display:inline-block;
            height:46px;
            width:50%;
            background:url(/img/header.png) no-repeat center;
            background-size: auto 21px;
            height: 100%;

        }
        img{
            height:20px;
            width:20px;
            margin-top:13px;
        }
    }

    .my-swipe {
      height: 158px;

      img{
        width:100%;
      }
    }
</style>
