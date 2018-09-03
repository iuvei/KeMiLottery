<template>
    <div id="history">
        <Focus :focus="images"></Focus>
        <ul>
            <!-- <li @click="pushToView({name:'CurrentDetail'})">本期详情</li>
            <li @click="pushToView({name:'AllList'})">全部期次</li> -->
            <li 
                v-for="(item,index) in adds" 
                :key="index" 
                @click="pushToView(item,index)"
                :style="index == $store.state.ssqSelectedIndex ? {borderBottom:'2px solid red'} : {borderBottom:'none'}"
            >
                {{item.title}}
            </li>
        </ul>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'

export default {
    components:{Focus},
    data(){
        return {
            images: {},
            adds:[
                {title:'本期详情',name:'CurrentDetail'},
                {title:'全部期次',name:'AllList'}
            ]
        }
    },
    methods:{
       pushToView(item,index){
           this.$store.commit('SSQSELECTEDINDEX',{ssqSelectedIndex:index});
           localStorage.setItem('ssqSelectedIndex',index);
           this.$router.push({name:item.name,params:{item:this.$store.state.currentSSQ}})
       }
    },
    created(){
        this.loadData('/api/focus2','get','images');
        var ssqSelectedIndex = localStorage.getItem('ssqSelectedIndex');
        this.$store.commit('SSQSELECTEDINDEX',{ssqSelectedIndex:ssqSelectedIndex});
    }
}
</script>
<style lang="scss" scoped>
    #history{
        position: fixed;
        top: 0;
        bottom: 64px;
        left: 0;
        right: 0;
        background: white;
        z-index: 3;
        overflow: scroll;
        ul{
            width:100%;
            height:40px;
            background: rgb(255, 255, 255);
            display:flex;
            flex-direction: row;
            border-bottom:1px solid lightgray;
            li{
                width:50%;
                height:100%;
                display:flex;
                justify-content: center;
                align-items: center;
                color: rgb(204, 204, 204);
            }
        }
    }
</style>


