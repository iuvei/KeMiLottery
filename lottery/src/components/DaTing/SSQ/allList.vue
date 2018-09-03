<template>
    <div id="allList">
        <ul>
            <li v-for="(item,key) in allList30" :key="key" @click="pushView(item)">
                <span>{{item.period}}</span>
                <span>
                     <span v-for="(winnum,index) in item.winnerNumber" :key="index"
                        style="margin-right:7px"
                        :style="index<6?{color:'red'}:{color:'blue'}"
                     >
                        {{winnum > 9 ? winnum : '0'+winnum}}
                    </span>
                    <span class="fa fa-angle-right"></span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import store from '@/store/index'
export default {
    data(){
        return {
            //一定要给默认的属性data
            allList: {data:[]},
        }
    },
    methods:{
        pushView(item){
            this.pushToView({name:'CurrentDetail'},{item,item});
            this.$store.commit('SSQSELECTEDINDEX',{ssqSelectedIndex:0});
        }
    },
    computed:{
        allList30(){
            return this.allList.data.slice(0,30);
        }
    },
     watch: {
        allList(newValue){
            this.$store.commit('SETCURRENTSSQ',{currentSSQ:newValue.data[0]});
            localStorage.setItem('currentSSQ',JSON.stringify(newValue.data[0]));
        }
    },
    created(){
        this.loadData('/api/ssq','get','allList');
    }
}
</script>
<style lang="scss" scoped>
    #allList{
        width:100%;
        ul{
            width:100%;
            display:flex;
            flex-direction: column;
            background:lightgray;
            li{
                width:100%;
                height:80px;
                background:#f0efe7;
                margin-bottom:1px;
                display:flex;
                flex-direction: column;
                padding:10px;
                box-sizing:border-box;
                span{
                    margin-bottom:10px;
                    font-size:17px;
                     .fa{
                    float:right;
                    margin-right:10px;
                }
                }
               
            }
        }
    }
    .active{
        border-bottom:2px solid red;
    }
</style>


