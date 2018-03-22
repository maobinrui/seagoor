<template>
  <div class="bg">
    <header style="background:#fff">
       <p>购物车</p>
    </header>
    <!--空购物车-->
    <section v-if="!shoppingdata" class="nullcar">
      <img src="/img/cartnull.jpg" />
      <p>购物车空空如也，赶紧去逛逛吧</p>
      <router-link to="/home" tag="button">去逛逛</router-link>
    </section>
    <!--有东西购物车-->
    <section class="nonullcar" v-if="shoppingdata" >
        <p class="goods">{{shoppingdata.channel}}</p>
        <div class="goodsdetails" v-for="datas in shoppingdata">
          <input type="checkbox" name="" class="choose">
          <img class="goodspic" :src="datas.imgurl" alt="">
          <span class="mengban">限购：{{datas.limitcount}}件</span>
          <div class="goodsright">
            <p class="goodstitle">{{datas.name}}</p>
            <img src="img/delete.png" >
            <div class="count">
              <span class="numreduce"  @click="number=number-1<1?1:number-1">-</span>
              <input class="num" type="text" :placeholder="number">
              <span class="numplus" @click="number=number+1>3?3:number+1">+</span>
            </div>

            <p class="goodsprice">￥{{datas.price}}</p>
          </div>
        </div>
        <div class="goodsdown">
          <p class="choosenum">已选件</p>
          <div>
            <p>税费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>￥</span></p>
            <p>总计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>￥</span></p>
          </div>
        </div>

        <footer>
      <div class="total" id="seaGroupMoney" style="background:#fff">
        <label class="ui-checkbox-s">
        <input type="checkbox" name="checkbox"  checked="">
        <span style="font-size: 16px;line-height: 50px;padding-left: 5px;color: #333;">全选</span>
        </label>
        <div style="float: right;color: #929292;">
        <p style="padding-top: 5px;" class="totalMoney">总计：¥529.41</p>
        <p style="padding-top: 5px;" class="totalFreeMoney">已优惠：¥0.00</p>

        </div>
        <button>去结算</button>
      </div>
    </footer>
    </section>

  </div>
</template>

<script>
export default {
  name: 'shoppingcar',
  data () {
    return {
        number:1,
        shoppingdatalist:[]
    }
  },
  mounted(){
    console.log(this.$store.state.shoppingdata);
    this.shoppingdatalist=this.$store.state.shoppingdata;
    console.log(this.shoppingdatalist);
  },
  computed:{

      shoppingdata(){
       return this.$store.state.shoppingdata;
       }



    }
}
</script>


<style lang="scss" scoped>
body{
height:100%;

}
  header{
    font-size: 18px;
    color: #333;
    line-height: 50px;
    height: 50px;
    text-align:center;
    background:#fff;
    position:fixed;
    top:0;
    width:100%;
    border-bottom:1px solid #eee;
  }
   .nullcar{
    padding-bottom:80%;
    background:#eee;

    img{
      width:27%;
      margin:0 auto;
      padding-top: 130px;
      display:block;
    }
    p{
      text-align: center;
      color: #999;
      margin-top: 25px;
    }
    button{
    width: 32%;
    margin: 0 auto;
    background: #333;
    margin-top: 30px;
    font-size: 18px;
    height: 44px;
    line-height: 44px;
    display: block;
    border-radius: 5px;
    border:0;
    color:#fff;
    }
}
.nonullcar{
  height:100%;
  margin-top:50px;

  border-bottom:1px solid #e8e8e8;
  .goods{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 10px;
    border-bottom: 1px solid #e8e8e8;
  }
  .goodsdetails{
    display:flex;
    height:115px;
    margin-top:10px;
    position:relative;
    border-bottom:1px solid #e8e8e8;
    .choose{
      box-radius:50%;
      margin:30px 10px;
    }
    .goodspic{
      width: 90px;
      height: 90px;
      border:1px solid #ccc;
    }
    .goodstitle{
      font-size: 12px;
      height: 39px;
      line-height:39px;
      overflow: hidden;
      display: block;
      color: #333;
      padding-left:15px;


    }
    .goodsright{
      img{
        position: absolute;
        top:10px;
        right:5px;
        width: 15px;
        height: 15px;
        display: block;

      }

    }
    .numreduce{
        display:inline-block;
        width:30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-right:1px solid #ccc;
        float:left;
    }
    .num{
        width:28px;
        height: 28px;
        line-height: 28px;
        float:left;
        border:none;

    }
    .numplus{
        display:inline-block;
        width:30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-left:1px solid #ccc;
        float:left;

    }
    .count{
        width:92px;
        height: 30px;
        line-height: 28px;
        float:left;
        border:1px solid #ccc;
        margin-left:15px;
        margin-top:20px;
        text-align:center;
    }
    .goodsprice{
      position:absolute;
      right:13%;
      bottom:30%;
      color:#EE3E54;
    }

  }
  .goodsdown{
      font-size:12px;
      color: #333;

      padding-left: 35px;
      line-height:34px;
      .choosenum{
          float: left;
        }
        div{
             float: right;
             padding-right:20px;
          }
  }
  .mengban{
    display:block;
    width:92px;
    height:15px;
    color:#fff;
    background:rgba(0,0,0,.5);
    font-size:12px;
    line-height:15px;
    position:absolute;
    text-align:center;
    top:77px;
    left:32px
  }
}

.total{
  position:fixed;
  bottom:10px;
  left:0;
  width:60%;
  height:100px;

button{
    color: #fff!important;
    padding: 0 10%;
    position:fixed;
     bottom:50px;
     right:0;
    background: #ee3e54!important;
    height: 50px;
    line-height: 50px;
    border:none
}
}
</style>
