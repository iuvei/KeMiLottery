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
            <div style="display:flex;align-items:center;">
                <i class="fa fa-mobile fa-3x" ></i>
                <span style="margin-left:10px">摇一摇机选</span> 
            </div>
            <span>
                至少选择6个红球，1个蓝球
            </span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        pushToHistory(){
            this.$router.push({name:'ssqHistory'});
        }
    }
}
</script>
<style lang="scss" scoped>
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
    }
</style>


