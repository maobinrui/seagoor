<template>
  <div class="range2">
    <ul  >
        <li v-for="con in brands">
            <img :src="con.imgurl" alt="" class="imgheader">
            <div class="content">
                <dl v-for="child in con.child">
                    <dt><img :src="child.imgurl" alt=""></dt>
                    <dd class="div_brands_child_item_name" >{{child.name}}</dd>
                </dl>


            </div>
        </li>

    </ul>


  </div>
</template>

<script>
import axios from "axios"
  export default{
    name:'range2',
    data(){
      return {
        brands:[]
      }
    },
    mounted(){
        axios.get("search/navigation.htm?&oem=AM&scheme=http&osversion=1.1.0&screenwidth=547&screenheight=766&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou").then(res=>{
            // console.log(res.data);
            this.brands = res.data.data.brands
            }).catch(error=>{

            })
      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"  scoped>

.range2{
display:flex;
    ul{
        width:100%;
            margin-top:96px;
            margin-bottom:94px;
        li{

            .imgheader{
                width:100%;
                margin-top: 13px;
                /* margin-bottom: 15px; */
                font-size: 15px;
                color: #333;
                background: #eee;
                height: 44px;
                padding-top: 10px;

            }
            .content{
                display:flex;
                margin-left:5px;
                flex-wrap:wrap;
                dl{
                    width:22%;
                    height:98px;
                    margin-right: 11px;
                    dt{
                    position:relative;
                        /* margin-bottom: 23px; */
                        img{
                            display: block;
                            width: 65%;
                            padding-left: 19%;
                            padding-top: 20%;
                        }
                    }
                    dd{
                        margin-top:12px;
                        position:relative;
                    }

                }
                dt::after{
                    content:'';
                    width:100%;
                    height:100%;
                    display:block;
                    position:absolute;
                    left:0;
                    bottom:0;
                    z-index:1;
                    background: url(/img/classify/line-brands.png) no-repeat;
                    background-position:0px 98px;
                }
                .div_brands_child_item_name {
                    font-size: 10px;
                    color: #333;
/*                     position: absolute;
                    top: 76px;
                    left: 3px; */
                    width: 100%;
                    text-align: center;
                    /* margin-bottom: 10px; */
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }
    }
}


</style>
