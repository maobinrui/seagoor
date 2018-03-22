<template>
  <div >
    <header class="fixed">
          <div class="div_search ">请输入相关产品或店铺搜索</div>
          <ul >
          <router-link to="/range/range1" tag="li" activeClass="current1">分类</router-link>
          <router-link to="/range/range2" tag="li" activeClass="current2">品牌</router-link>
          </ul>

    </header>

    <router-view></router-view>
  </div>

</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fixed{
  position: fixed;
  width: 100%;
  background:#fff;
  z-index:100;
}

.current1 {
    background: url(/img/classify/line.png) right 24px bottom no-repeat;
    background-size: 40px 1px;
    color: #000!important;
}
.current2 {
    background: url(/img/classify/line.png) left 24px bottom no-repeat;
    background-size: 40px 1px;
    color: #000!important;
}
  .div_search {
    margin: 10px;
    background-color: #e9ebed;
    width:100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
    color: #999;
    border-radius: 5px;

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      height: 100%;
      width: 20px;
      margin-left: -100px;
      background: url(/img/search.png) left no-repeat;
      background-size: 11px;
  }
}

  ul{
    display: flex;
    top: 50px;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #ccc;
    font-size: 15px;
    background: #fff;
    li{
      list-style:none;
      flex:1;
      line-height: 44px;
      color: #999;
      &:nth-child(1){
        text-align: right;
        padding-right: 30px;

      }
      &:nth-child(2){
        padding-left: 30px;
        text-align: left;
      }
    }
  }
/*   .current {
    background: url(/img/line.png) right 24px bottom no-repeat;
    background-size: 40px 1px;
    color: #000!important;
  } */
/*   .active{
    border-bottom:5px solid red;
  }
 */
</style>
