<template>
    <div id="Cart">
         <div class="topBar">
           <span 
           style="display:flex; flex-direction:row; justify-content:center; align-items:center;"
           @click="$router.go(-1)"
           >
               <i class="fa fa-angle-left"></i>
               返回
           </span>
           <h1>双色球</h1>
           <span style="margin-right:8px">往期开奖</span>
        </div>
        <Focus :focus="images"></Focus>
        <div class="dateMsg">
            <span>第2918104期</span>
            <span>奖池11亿320万，可开出220注500万</span>
        </div>
        <div class="content">
            <div class="btnBox">
                <button @click="$router.push({name:'ssq'})">
                    <i class="fa fa-plus"></i>
                    <span>手动选号</span>
                </button>
                <button @click="selecteRanDom">
                    <i class="fa fa-plus"></i>
                    <span>机选一注</span>
                </button>
                <button @click="clearCart">
                    <i class="fa fa-trash-o"></i>
                    <span>清空列表</span>
                </button>
            </div>
            <ul class="orderList">
                <li v-for="(item,index) in orderList" :key="index">
                    <i class="fa fa-times-circle-o fa-2x" @click="deleteOrder(index)"></i>
                    <div>
                         <span v-for="(num,key) in item" :key="key" :style="key<6?{color:'red'}:{color:'blue'}">
                            {{num>9?num:'0'+num}}
                        </span>
                    </div>
                    <i class="fa fa-angle-right" style="color:#666; fontSize:20px"></i>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <button>立即付款{{money}}元</button>
        </div>
    </div>
</template>
<script>
import Focus from './Focus'
export default {
    components:{Focus},
    data(){
        return {
            images:[],
        }
    },
    computed:{
        orderList(){
            return this.$store.state.Cart.orderList;
        },
        money(){
            return this.$store.state.Cart.orderList.length*2;
        }
    },
    methods:{
        //机选
        selecteRanDom(){
            var allBalls = [];
            var obj = {};
            //随机获取红球
            while(allBalls.length<6){
                var redKey = Math.ceil(Math.random()*33);
                if(!obj[redKey]){
                    allBalls.push(redKey);
                    obj[redKey] = true;
                }
            }
            //随机获取蓝球
            allBalls.push(Math.ceil(Math.random()*16));
            this.$store.commit('ADDTOORDERLIST',{order:allBalls});
        },
        //清空
        clearCart(){
            this.$store.commit('CLEARORDERLIST');
        },
        //删除一行
        deleteOrder(index){
            this.$store.commit('CLEARONELINE',index);
        }
    },
    created(){
       this.loadData('/api/focus','get','images');
    }
}
</script>
<style lang="scss" scoped>
    #Cart {
        position:fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(226, 226, 226);
        z-index:99;
         .topBar{
            width:100%;
            height:50px;
            background:#d91d37;
            display:flex;
            flex-direction: row;
            justify-content:space-between;
            align-items:center;
            color:white;
            h1{
                font-size:24px;
                font-weight:bolder;
            }
            i{
                font-size:40px;
                margin:5px;
            }
        }
        .dateMsg{
            width:100%;
            height:38px;
            padding:5px 10px;
            display:flex;
            flex-direction: row;
            justify-content:space-between;
            align-items:center;
            background:white;
            font-size:14px;
            color:#999;
            box-sizing:border-box;
        }
        .content{
            width:100%;
            height:68%;
         
            .btnBox{
                width:100%;
                height:15%;
                display:flex;
                flex-direction: row;
                justify-content:space-around;
                align-items:center;
                button{
                    width:97px;
                    height:34px;
                    background:white;
                    color:#ab9e8c;
                    border:1px solid #dddbd1;
                    border-radius:5px;
                    text-align:center;
                    line-height:34px;
                    font-size:14px;
                    outline:none;
                }
            }
            .orderList{
                width:100%;
                height:85%;
                overflow-y:scroll;
                
                padding:0 3%;
                ul{
                    height:100%;
                    width:100%;
                }
                li{
                    width:94%;
                    height:63px;
                    background:white;
                    color:lightgray;
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    border-bottom:1px solid lightgray;
                    span{
                        margin:0 4px;
                    }
                }
            }
        }
        .bottom{
            position: fixed;
            bottom:0;
            width:100%;
            height:58px;
            background:#2e3235;
            padding:3%;
            button{
                width:94%;
                height:56px;
                background: #ffb400;
                text-align: center;
                line-height: 56px;
                color:#38200b;
                font-size:18px;
                border:none;
                outline: none;
                border-radius: 10px;
            }
        }
    }
</style>


