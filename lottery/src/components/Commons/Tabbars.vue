<template>
    <div id="Tabbar">
        <ul>
            <li 
                v-for="(item,index) in tabbs" 
                :key="index" 
                @click="pushToView(item.path,index)"
                :style="index == $store.state.selectedIndex?{color:'orange'}:{color:'rgb(134, 123, 123)'}"
            >
                <i :class="item.icon"></i>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabbs: [
                {title:'大厅',path:'/DaTing',icon:'fa fa-home'},
                {title:'竞技场',path:'/JingJiChang',icon:'fa fa-futbol-o'},
                {title:'发现',path:'/FaXian',icon:'fa fa-globe'},
                {title:'开奖',path:'/KaiJiang',icon:'fa fa-trophy'},
                {title:'我的',path:'/WoDe',icon:'fa fa-user-o'}
            ]
        }
    },
    methods:{
        pushToView(path,index){
            this.$store.commit('SELECTEINDEX',{selectedIndex:index});
            //注意，如果要使用localStoreage设置对象的时候，一定要将对象字符串化
            localStorage.setItem('INDEX',index);
            this.$router.push(path);
        }
    },
    mounted(){
        var selectedIndex = localStorage.getItem('INDEX');
        this.$store.commit('SELECTEINDEX',{selectedIndex:selectedIndex});
    }
}
</script>
<style lang="scss" scoped>
    #Tabbar{
        width:100%;
        height:64px;
        background:rgb(24,24,24);
        position:fixed;
        bottom:0;
        ul{
            width: 100%;
            height:100%;
            display:flex;
            flex-direction:row;
            li{
                flex:1;
                color:rgb(134, 123, 123);
                justify-content:space-around;
                align-items:center;
                display:flex;
                flex-direction:column;
                font-size:14px;
                i{
                    font-size:25px;
                }
            }
        }
        
    }
</style>


