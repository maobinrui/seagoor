<template>
  <div>
    <!--头部-->
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
      <!--轮播-->
      <swipe class="my-swipe">
          <swipe-item v-for="data in looplist" :key="data.id">
            <img :src='data.imageurl' />
          </swipe-item>
      </swipe>
      <!--小图标ul-->
      <ul class="icon">
          <li v-for="data in iconbardatalist">
                 <a :href='data.linkurl'>
                    <img :src='data.imageurl' />
                    <p>{{data.title}}</p>
                </a>
          </li>
      </ul>
      <!--西狗拼团-->
      <section class="teambuy">
          <p class="teambuy_bg"></p>
          <p class="teambuy_text"><span>|</span>&nbsp;&nbsp;<a href="http://m.seagoor.com/tuanlist.html">更多</a></p>
      </section>
          <ul class="teambuy_ul">
              <li v-for="data in teambuydatalist">
                  <a href=""><img :src="data.imgurl"/></a>
                  <p>{{data.pa}}人团</p><span>￥{{data.groupprice}}</span>
              </li>
          </ul>

        <!--公告，购精选，品牌团，更多精彩活动-->
         <section class="morelist">
           <ul class="thing">
               <li v-for="data in thingdata">
                   <a :href="data.linkUrl"><img :src="data.bgImgUrl" alt=""></a>
               </li>
           </ul>
           <img class="shoppingchange" :src="shoppingchange.bgImgUrl" >
           <ul class="yami">
               <li v-for="data in yami" :key=data.id>
                   <a :href="data.linkUrl"><img :src="data.bgImgUrl" alt=""></a>
               </li>
           </ul>
           <ul class="beaty">
               <li v-for="data in beaty" :key=data.id>
                   <a :href="data.linkUrl"><img :src="data.bgImgUrl" alt=""></a>
               </li>
           </ul>
           <ul class="savour">
               <li v-for="data in savour" :key=data.id>
                   <a :href="data.linkUrl"><img :src="data.bgImgUrl" alt=""></a>
               </li>
           </ul>
           <ul class="team">
               <li v-for="data in team" :key=data.id>
                   <a :href="data.linkUrl"><img :src="data.bgImgUrl" alt=""></a>
               </li>
           </ul>
           <ul class="brand">
               <li v-for="data in brand" :key=data.id>
                   <a :href="data.linkUrl"><img :src="data.bgImgUrl" alt=""></a>
               </li>
           </ul>
           <img class="more" :src="more.bgImgUrl" >
        </section>
        <section>
      <div  v-for="data in mores">
        <img class="pic" :src="data.imgurl" >
        <ul class="list">
              <li v-for="datas in data.itemlist">
                <a href="">
                  <img :src="datas.imgurl" alt="" />
                </a>
                <p>{{datas.name}}</p>
                <span class="smallsize-font">￥{{datas.price}}</span><del class="smallsize-font">￥{{datas.oldprice}}</del>
              </li>
          </ul>
      </div>
    </section>
        <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import { Indicator } from 'mint-ui';



export default {
    //name: 'Home'
  data () {
    return {
        looplist:[],//轮播图数据存储
        iconbardatalist:[],//icon 小图标列阵
        teambuydatalist:[],//西狗拼团
        //moredatalist:[],//公告，购精选，品牌团，更多精彩活动
        thingdata:'',//西狗好物，限时抢购，
        shoppingchange:'',//购精选
        yami:[],
        beaty:[],
        savour:[],
        team:[],
        brand:[],
        more:'',
        pic:'',
        datalist:[],
        mores:[]


    }
  },


  mounted(){

            //Indicator.open('加载中...');
            //轮播图数据请求
            //环球美食等小图标信息获取
            axios.get("index/module.htm?&oem=AM&scheme=http&osversion=1.1.0&screenwidth=320&screenheight=495&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{
                this.looplist=res.data.data.banners;  //轮播图数据请求
                this.iconbardatalist=res.data.data.labs;//环球美食等小图标信息请求

                }).catch(error=>{
                })

            //西狗拼团数据获取
            axios.get("groupbuy/listforindex.htm?oem=AM&scheme=http&osversion=1.1.0&screenwidth=320&screenheight=495&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{
                this.teambuydatalist=res.data.data.list;
                }).catch(error=>{
                })


                //公告，购精选，品牌团，更多精彩活动
            axios.get("dc.htm?oem=AM&scheme=http&osversion=1.1.0&screenwidth=320&screenheight=495&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{

                this.thingdata=res.data.data.floors[2].items;
                this.shoppingchange=res.data.data.floors[3].items[0];
                this.yami=res.data.data.floors[4].items;
                this.beaty=res.data.data.floors[5].items;
                this.savour=res.data.data.floors[6].items;
                this.team=res.data.data.floors[7].items;
                this.brand=res.data.data.floors[8].items;
                this.more=res.data.data.floors[9].items[0];

                }).catch(error=>{
                })


                axios.get("index/gettodaynew.htm?curpage=1&oem=AM&scheme=http&osversion=1.1.0&screenwidth=320&screenheight=495&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{
                this.pic=res.data.data.list[0].imgurl;
                this.datalist=res.data.data.list[0].itemlist;
                this.mores=res.data.data.list;
                console.log(this.more);
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
    .icon{
      margin-top:10px;
        height:134px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        li{
            text-align:center;
            height:67px;
            width:20%;
            img{
                height:36px;

            }
            p{
                font-size:12px;
            }
            a{
                color:#000;
                text-decoration:none;
            }
        }
    }
    .teambuy{
        display:flex;
        justify-content:space-between;
        .teambuy_bg{
            height:39px;
            width:80%;
            background:url(/img/xg_groups.png) no-repeat 10px;
            background-size:76px 19px;

        }
        .teambuy_text{
            height:39px;
            width:20%;
            line-height:39px;
            text-align:right;
            background:url(/img/more.png) no-repeat 80px 15px;
            background-size: 6px 9px;
            line-height: 39px;

            padding-left: 10px;
            padding-right: 30px;
            span{
                color:#ccc;
            }
            a{
                color: #333;
                text-decoration:none;
            }
    }

    }
     .teambuy_ul{
            height:126px;
            display:flex;
            overflow:hidden;
            li{
                width: 84px;
                height:126px;
                margin-left:10px;
                img{
                    width: 84px;
                    height:84px;
                    border:1px solid #ccc;

                }
                p{
                    width:35px;
                    //line-height:21px;
                    padding: 1px 0;
                    font-size: 9px;
                    font-weight: 600;
                    margin-right: 0;
                    background-color: #fad8d9;
                    border-radius: 3px;
                    color: #ee3e54;
                    display:inline-block;
                }
                a{
                    display:block;
                }
                span{
                    font-size: 10px;
                    color: #ee3e54;
                    padding-top: -24px;
                    font-weight: 300;
                    display:inline-block;
                    width:42px;
                }
            }
        }
        .morelist{
            width:100%;
            height:100%;
            .thing,.yami,.beaty,.savour,.brand{
                display:flex;
                li{
                    width:50%;
                  img{
                    width:100%;
                }
                }

            }
            .shoppingchange{
                width:100%;
                margin-top:-5px;
            }
            .team{
                width:100%;
                li{
                    a{
                        display:block;
                        width:100%;
                        img{
                            width:100%;
                        }
                    }
                }

            }
            .more{
                width:100%;
            }
        }
        .pic{
    width:100%
  }
  .list{
    overflow:hidden;
    display:flex;
    margin-bottom:50px;
    li{
      width:84px;
      margin:0 5px;
      img{
        width:84px;
        height:84px;
      }
      p{
         display: -webkit-box;
         overflow: hidden;
         font-size: 12px;
         text-align: center;
         height: 28px;
         line-height: 14px;
         color: #333;
         margin-top: 10px;

      }
      span,del{
        height:28px;
        font-size:12px;
        transform-origin-x:0;
        transform:scale(0.90);
      }
      .smallsize-font{
 　　　　font-size:6px;
  }
      span{
        color: #ee3e54;
        font-size: 9px;
        font-weight: 400;
      }
      del{
        color: #999;
        font-size: 9px;
        font-weight: 400;
      }
    }
  }
</style>
