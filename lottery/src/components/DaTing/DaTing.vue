<template>
    <div id="DaTing">
        <div class="topBar">可米彩票</div>
        <Focus :focus="images"></Focus>
        <div class="navBar">
            <p style="font-size:15px; margin:5px; color:red;">可米彩票已累计中奖:10亿</p>
            <ul>
                <li v-for="(item,index) in navBarList" :key="index">
                    <div>
                         <i :class="item.icon" :style="item.istyle"></i>
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
        return{
            navBarList: [
                {title:'领红包',icon:'fa fa-btc',style:{color: 'lightblue'},istyle:{border:'1px solid lightblue'}},
                {title:'开奖',icon:'fa fa-trophy',style:{color: 'orange'},istyle:{border:'1px solid orange'}},
                {title:'下载',icon:'fa fa-cloud-download',style:{color: 'red'},istyle:{border:'1px solid red'}},
                {title:'资讯',icon:'fa fa-file-text-o',style:{color: 'lightgreen'},istyle:{border:'1px solid lightgreen'}}
            ],
             images:{},
             gameList:{}
        }
    },
    created(){ 
        this.loadData('/api/games','get','gameList');
        this.loadData('/api/focus','get','images'); 
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
    *{
        margin:0;
        padding: 0;
    }
     #DaTing{
        width:100%;
        height:100%;
        background:#f4f4f4;
        .topBar{
           
            width:100%;
            height:44px;
            background: rgb(214, 82, 82);
            line-height: 44px;
            text-align: center;
            font-weight:900;
            font-size: 20px;
            color:white;
        }
        .navBar{
            background: white;
            width:100%;
            height:104px;
            padding: 12px 0;
            ul{
                width:100%;
                height:95%;
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
                    }
                    
                    i{
                        height:40px;
                        width:40px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 40px;
                        border:1px solid red;
                        font-size:24px;
                    }
                }
            }
        }
        .gameList{
            width:100%;
        }
    }
</style>


