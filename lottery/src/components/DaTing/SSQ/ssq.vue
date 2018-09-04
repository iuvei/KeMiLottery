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
           <span>双色球</span>
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
                <li v-for="(item,key) in 33" :key="key">
                    {{item>9?item:'0'+item}}
                </li>
            </ul>
        </div>
        <div class="blueBall">
            <ul>
                <li v-for="(item,key) in 16" :key="key">
                    {{item>9?item:'0'+item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        pushToHistory(){
            this.$router.push({name:'ssqHistory'});
        },
        randomNum(){
            alert();
        },
        shake(){
           if(window.DeviceMotionEvent) {
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
                        alert('摇了');
                    }
                    lastX = x;
                    lastY = y;
                }, false);
            }

        },
        created(){
            this.shake();
        }
    }
}
</script>
<style lang="scss" scoped>
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
        bottom:64px;
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
            font-size:20px;
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
            
        }
        .redBall{
            @include ballLi;
            color: #bc102d;
        }
        .blueBall{
            @include ballLi;
            color: #0e52a7;
        }
    }
</style>


