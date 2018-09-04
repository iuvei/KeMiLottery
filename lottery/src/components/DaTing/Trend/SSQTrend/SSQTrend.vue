<template>
    <div id="ssqTrend">
        <div class="topBar">
           <span 
           style="display:flex; flex-direction:row; justify-content:center; align-items:center;"
           @click="$router.push({name:'zst'})"
           >
               <i class="fa fa-angle-left"></i>
           </span>
           <span style="margin:0 auto;">双色球走势图</span>
        </div>
        <Focus :focus="images"></Focus>
        <ul>
            <li 
                v-for="(item,key) in balls" 
                :key="key" 
                @click="pushTo(item,key)"
                :style="key==selectedIndex?{borderBottom:'2px red solid'}:{borderBottom:'none'}" 
            >
                {{item.title}}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'
export default {
    components:{Focus},
    data(){
        return {
            images: [],
            balls: [
                {name:'redBall',title:'红球走势'},
                {name:'blueBall',title:'蓝球走势'}
            ]
        }
    },
    computed:{
        selectedIndex(){
            return this.$store.state.ballsZoushi;
        }
    },
    methods:{
        pushTo(item,key){
            this.pushToView(item);
            this.$store.commit('BALLSZOUSHI',{selectedIndex:key});
        }
    },
    created(){
        this.loadData('/api/focus','get','images');
        this.$store.dispatch('SetSSQData');
        this.$store.commit('BALLSZOUSHI',{selectedIndex:0});
    }
}
</script>
<style lang="scss" scoped>
    #ssqTrend{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#f4f4f4;
        z-index:2;
        .topBar{
            width:100%;
            height:50px;
            background:#ffffff;
            display:flex;
            flex-direction: row;
            align-items:center;
            color:#000000;
            font-size:20px;
            i{
                font-size:40px;
                margin-left:5px;
            }
        }
        ul{
            width:100%;
            height:44px;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            background:white;
           
            li{
                flex:1;
                width:50%;
                height:44px;
                line-height: 44px;
                text-align:center;
            }
        }
    }
</style>


