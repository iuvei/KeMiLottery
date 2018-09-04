<template>
    <div id="trendView">
        <div class="topBar">
           <span 
           style="display:flex; flex-direction:row; justify-content:center; align-items:center;"
           @click="$router.push({name:'DaTing'})"
           >
               <i class="fa fa-angle-left"></i>
           </span>
           <span style="margin:0 auto;">可米彩票走势图</span>
           
        </div>
        <Focus :focus="images"></Focus>
        <div class="navBar">
            <ul>
                <li v-for="(item,index) in navBarList" :key="index">
                    <div>
                         <i :class="item.icon" :style="item.bg"></i>
                        {{item.title}}
                    </div>
                </li>
            </ul>
        </div>
        <Games :resp="gameList"></Games>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'
import Games from '@/components/Commons/Games'
export default {
    components:{Focus,Games},
    data(){
        return {
            images: [],
            gameList:{}
        }
    },
    created(){
        this.loadData('/api/focus','get','images');
        this.loadData('/api/trendIcon','get','gameList');
    }
}
</script>
<style lang="scss" scoped>
   .fade-enter-active, .fade-leave-active{
        transition:all .3s;
    }
    .fade-enter, .fade-leave-to{
        transform:translateX(300px);
        opacity:0;
    }
#trendView{
    position:fixed;
    top:0;
    bottom:64px;
    left:0;
    right:0;
    background: #f4f4f4;
    z-index:2;
    overflow: hidden;
    .topBar{
        width:100%;
        height:50px;
        background:#d91d37;
        display:flex;
        flex-direction: row;
      
        align-items:center;
        color:white;
        font-size:20px;
        i{
            font-size:40px;
            margin:5px;
        }
    }
     .navBar{
        width:100%;
        height:94px;
        background:white;
        ul{
            width:100%;
            height:100%;
            display: flex;
            flex-direction: row;
            li{
                flex:1;
                width:100%;
                height: 100%;
                div{
                    width:100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content:space-around;
                    align-items: center;
                    color:#aeaeae;
                }
                
                i{
                    height:40px;
                    width:40px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 40px;
                    color:white;
                    font-size:24px;
                }
            }
        }
    }
}
</style>


