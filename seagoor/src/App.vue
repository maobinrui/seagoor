<template>
  <div>
    <router-view/>

    <navbar></navbar>
  </div>
</template>

<script>
import navbar from "./components/common/navbar"


export default {
  name: 'App',
  data(){
    return {

    }
  },
   components:{
    navbar,

  }
}
</script>

<style lang="scss">
*{
    margin:0;
    padding:0;
}
ul{
    list-style:none;
}
body,html{
    width:100%;
    height:100%;
}
</style>
