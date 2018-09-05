<template>
    <div id="ssq">
        <div class="topBar">
           <span 
           style="display:flex; flex-direction:row; justify-content:center; align-items:center;"
           @click="$router.go(-1)"
           >
               <i class="fa fa-angle-left"></i>
               返回
           </span>
           <h1>双色球</h1>
           <span style="margin-right:8px" @click="pushToHistory">往期开奖</span>
        </div>
        <div class="shake">
            <div style="display:flex;align-items:center;" @click="randomNum">
                <i class="fa fa-mobile fa-2x" ></i>
                <span style="margin-left:10px">摇一摇机选</span> 
            </div>
            <span>
                至少选择6个红球，1个蓝球
            </span>
        </div>
        <div class="redBall">
            <ul>
                <li v-for="(item,key) in 33" :key="key" v-random="redBalls">
                    {{item>9?item:'0'+item}}
                </li>
            </ul>
        </div>
        <div class="blueBall">
            <ul>
                <li 
                    v-for="(item,key) in 16" 
                    :key="key"
                    :style="item==blueBall?{background:'blue',color:'white'}:{}"
                >
                    {{item>9?item:'0'+item}}
                </li>
            </ul>
        </div>
        <div class="cartBar">
            <button @click="showRandomSelect=!showRandomSelect">机选</button>
            <button @click="addToCart">
                {{redBalls.length>0?'加入购物车':'查看购物车'}}
                <span class="countBadge">{{orderCount}}</span>
            </button>
            <button @click="takeOrder">立即投注</button>
        </div>
        <ul class="randomList" v-if="showRandomSelect">
            <li v-for="(item,key) in randomList" :key="key" @click="seleRanDom(item.num)">
                <i class="fa fa-cc-visa fa-2x" style="color:goldnrod"></i>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            redBalls: [],
            blueBall: '',
            showRandomSelect:false,
            randomList: [
                {title:'1注',num:1},
                {title:'5注',num:5},
                {title:'10注',num:10}
            ]
        }
    },
    computed:{
        orderCount(){
            return this.$store.state.Cart.orderList.length;
        }
    },
    methods: {
        pushToHistory(){
            this.$router.push({name:'ssqHistory'});
        },
        //随机获取6个红球和1个蓝球
        randomNum(){
            var rs = [];
            var obj = {};
            //获取随机的红球
            while(rs.length<6){
                var num = Math.ceil(Math.random()*33);
                if(!obj[num]){
                    obj[num] = true;
                    rs.push(num);
                }
            }
            this.redBalls = rs;
            //获取随机的蓝球
            this.blueBall = Math.ceil(Math.random()*16);
        },
        shake(){
           if(window.DeviceMotionEvent) {
               var _this = this;
                var speed = 25;    // 用来判定的加速度阈值，太大了则很难触发
                var x, y, z, lastX, lastY, lastZ;
                x = y = z = lastX = lastY = lastZ = 0;

                window.addEventListener('devicemotion', function(event){
                    var acceleration = event.accelerationIncludingGravity;
                    x = acceleration.x;
                    y = acceleration.y;
                    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
                        // 用户设备摇动了，触发响应操作
                        // 此处的判断依据是用户设备的加速度大于我们设置的阈值
                        //alert('摇了');
                        //随机获取6个红球和1个蓝球
                        _this.randomNum();
                    }
                    lastX = x;
                    lastY = y;
                }, false);
            }

        },
        //随机次数
        seleRanDom(num){
            console.log(num);
            //订单列表
            var orderList = [];
            while(num>0){
                var allBalls = [];
                var obj = {};
                //获取随机的红球
                while(allBalls.length<6){
                    var key = Math.ceil(Math.random()*33);
                    if(!obj[key]){
                        obj[key]=true;
                        allBalls.push(key);
                    }
                }
                //获取随机蓝球
                allBalls.push(Math.ceil(Math.random()*16));
                this.$store.commit('ADDTOORDERLIST',{order:allBalls});
                num--;
            }
            this.$router.push({name:'Cart'});
        },
        //加入购物车
        addToCart(){
            if(this.redBalls.length){
                var order = Array.from(this.redBalls);
                order.push(this.blueBall);
                this.$store.commit('ADDTOORDERLIST',{order:order});
            }else{
                this.$router.push({name:'Cart'});
            }
            this.redBalls = [];
            this.blueBall = [];
        },
        //立即投注
        takeOrder(){
            if(this.redBalls.length){
                this.addToCart();
            }
            this.$router.push({name:'Cart'})
        }
    },
    created(){
        this.shake();
    }
}
</script>
<style lang="scss" scoped>
    .countBadge{
        position:fixed;
        display: block;
        width:25px;
        height:25px;
        background: #b01e35;
        color:white;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
        bottom:34px;
        right:35%;
        font-size:14px;
    }
    @mixin ballLi{
        width: 100%;
        height: auto;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            li{
                width:38px;
                height:38px;
                border-radius: 50%;
                border:1px solid #ccc;
                text-align: center;
                line-height: 38px;
                background:white;
                margin-left:10px;
                margin-top:10px;
                font-size: 18px;
            }
        }
    }
    #ssq{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:2;
        background:#f0efe7;
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
        .shake{
            width:100%;
            height:40px;
            line-height:40px;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding-left:6px;
            padding-right:10px;
            font-size:14px;
            box-sizing: border-box;
        }
        .redBall{
            @include ballLi;
            color: #bc102d;
        }
        .blueBall{
            @include ballLi;
            color: #0e52a7;
        }
        .cartBar{
            position: absolute;
            bottom:0px;
            width:100%;
            height:64px;
            background:#2e3235;
            padding:10px;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            button{
                border:none;
                border-radius:5px;
                outline: none;
                font-size:18px;
                text-align: center;
            }
            button:nth-child(1){
                width:20%;
                height:100%;
                color:white;
                background:#3f4447;
            }
            button:nth-child(2){
                width:35%;
                height:100%;
                background:#ecebd3;
                color:#604928;
            }
             button:nth-child(3){
                width:28%;
                height:100%;
                background:#ffb400;
                color:#38200b;
            }
            
        }
        .randomList{
            position:fixed;
            width:30%;
            background:#fff;
            bottom:64px;
            left:15px;
            border:1px solid rgb(121, 117, 117);
            li{
                height:50px;
                width:100%;
                border-bottom:1px solid lightgray;
                display:flex;
                justify-content:space-around;
                align-items: center;
                i{
                    color:rgb(240, 209, 70);
                }
                span{
                    color:#666;
                    font-size:18px;
                }
            }
        }
    }
</style>


