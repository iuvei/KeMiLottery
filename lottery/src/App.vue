<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar/>
  </div>
</template>

<script>
//导入模块
import Tabbar from '@/components/Commons/Tabbars'
export default {
  name: 'App',
  //注册模块
  components:{Tabbar},
  created(){
     localStorage.setItem('SELECTEINDEX',0);
  }
}
</script>

<style>
  #app{
    position: absolute;
    top:0;
    bottom:64px;
    left:0;
    right:0;
  }
</style>
