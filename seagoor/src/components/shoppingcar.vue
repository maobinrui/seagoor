<template>
  <div class="bg">
    <header>
       <p>购物车</p>
    </header>
    <!--空购物车-->
    <section class="nullcar">
      <img src="/img/cartnull.jpg" />
      <p>购物车空空如也，赶紧去逛逛吧</p>
      <button>去逛逛</button>
    </section>
    <!--有东西购物车-->
    <section class="nonullcar">
        <p class="goods">保税区</p>
        <div class="goodsdetails">
          <input type="checkbox" name="" class="choose">
          <img class="goodspic" src="http://item.qn.seagoor.com/1491461759569.jpg?imageView2/0/w/180" alt="">
          <span class="mengban">限购：件</span>
          <div class="goodsright">
            <p class="goodstitle">商品标题</p>
            <img src="img/delete.png" >
            <div class="count">
              <span class="numreduce">-</span>
              <input class="num" type="text" placeholder="1">
              <span class="numplus">+</span>
            </div>

            <p class="goodsprice">￥</p>
          </div>
        </div>
        <div class="goodsdown">
          <p class="choosenum">已选件</p>
          <div>
            <p>税费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>￥</span></p>
            <p>总计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>￥</span></p>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'shoppingcar',
  data () {
    return {

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
    display:none;
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
</style>
