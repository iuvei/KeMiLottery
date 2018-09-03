<template>
    <div id="redBall">
        <div class="cellLeft">
            <ul>
                <li v-for="(item,index) in redBallData" :key="index">
                    <span>{{item.period}}</span>
                    
                    <!-- <span v-for="(item,key) in item.missNumber" :key="key">{{item}}</span> -->
                </li>
            </ul>
        </div>
       
    </div>
</template>
<script>
export default {
    computed: {
        redBallData(){
           return this.$store.getters.redBallData;
        }
    }
}
</script>
<style lang="scss" scoped>
     #redBall {
        .cellLeft {
            width: 20%;
            height: 100%;
           
            ul {
                width: 100%;
                height: 100%;
                
                li {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    &:nth-child(2n-1){
                        background: rgba(238, 237, 237, 0.898);
                    }
                }
            }
        }
    }
</style>


