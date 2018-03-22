<template>
  <div class="range1">
    <ul class="sidebar">
        <li v-for="name in categories" class="sidebar_li"><a :href="name.categoryid
">{{name.name}}</a></li>
    </ul>
    <div class="div_content">
        <ul class="div_content_ul">
            <li class=""  v-for="name in categories" :name="name.categoryid">
                <div class="background">{{name.name}}
                </div>
                <div class="flex">
                    <dl v-for="child,index in name.child" >
                        <dt><a href=""><img :src="child.imgurl" alt="" /></a></dt>
                        <dd><a href="" class="item_name">{{child.name}}</a></dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
  export default{
    name:'range1',
    data(){
      return {
        categories:[]
      }
    },
      mounted(){
        axios.get("search/navigation.htm?&oem=AM&scheme=http&osversion=1.1.0&screenwidth=547&screenheight=766&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{
            // console.log(res.data);
            this.categories = res.data.data.categories
            }).catch(error=>{

            })
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
a{
    text-decoration:none;
}
.range1{
    display:flex;
}
.sidebar {
    position: fixed;
    width: 80px;
    text-align: center;
    top: 96px;
    bottom: 51px;
    border-right: 1px solid #e8e8e8;
    background: #fff;
    overflow: scroll;
    .sidebar_li{
        height: 50px;
        line-height: 50px;
        /* width: 78px; */
        list-style:none;
        a{

            color: #333;
            font-size: 13px;

        }

    }

}
.div_content{
    flex:1;
    margin-top:96px;
    margin-left:80px;
    margin-bottom:94px;
    .div_content_ul{
    width:100%;
        li{
            .background{
                    padding-top: 14px;
                    text-align: center;
                    background: url(/img/classify/title.png) no-repeat center;
                    color: #fff;
                    font-size: 13px;
                    height: 44px;
                    background-size: 335px 32px;
                    /* margin-top: 20px; */
            }
            .flex{
                display:flex;
                margin-top: 20px;
                justify-content:space-around;
                flex-wrap:wrap;
                dl{
                width:33%;


                    dt{
                        width: 60px;
                        height: 60px;
                        margin:0 auto;
                        a{
                            display:block;
                            width:100%;
                            height:100%;
                            img{
                                width: 100%;

                            }

                        }
                    }
                    dd{
                        text-align:center;
                    }
                    .item_name {
                        margin-top: 6px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 11px;
                        color:rgb(51, 51, 51);


                    }
                }
            }
        }

    }
}

</style>
