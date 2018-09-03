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
        background:orange;
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
    }
</style>


