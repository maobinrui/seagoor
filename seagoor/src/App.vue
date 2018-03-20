<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import sidebar from "./components/common/navbar"
export default {
  name: 'App'
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
</style>
