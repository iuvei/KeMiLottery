<template>
    <div id="currentDetail">
        <span>第{{currentItem.period}}期</span>
        <ul>
            <li v-for="(item,key) in currentItem.winnerNumber" :key="key"
                :style="key>5?{color:'blue',borderColor:'blue'}:{}"
            >
                {{item>9?item:'0'+item}}
            </li>
        </ul>
        <table class="tab1">
            <tr>
                <th>本期销量(元)</th>
                <th>奖池奖金(元)</th>
            </tr>
            <tr>
                <td>123456123</td>
                <td>12345679</td>
            </tr>
        </table>
        <table class="tab2">
            <tr><th>奖项</th><th>中奖注数</th><th>每注奖金</th></tr>
            <tr><td>一等奖</td><td>5</td><td>468654</td></tr>
            <tr><td>二等奖</td><td>10</td><td>57987</td></tr>
            <tr><td>三等奖</td><td>1045</td><td>3000</td></tr>
            <tr><td>四等奖</td><td>55858</td><td>2000</td></tr>
            <tr><td>五等奖</td><td>1041620</td><td>100</td></tr>
            <tr><td>六等奖</td><td>10982801</td><td>5</td></tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentItem: {}
        }
    },
    created(){
       // console.log(this.$route);
        this.$store.commit('SSQSELECTEDINDEX',{ssqSelectedIndex:0});
        localStorage.setItem('ssqSelectedIndex',0);
         if(this.$route.params.item){
             this.currentItem = this.$route.params.item;
        }else{
            this.currentItem = JSON.parse(localStorage.getItem('currentSSQ'));
        }
        console.log(this.currentItem);
        
    },
    activated(){
        console.log("当前期次组件显示");
       if(this.$route.params.item){
             this.currentItem = this.$route.params.item;
        }else{
            this.currentItem = JSON.parse(localStorage.getItem('currentSSQ'));
        }
    },
    deactivated(){
        console.log("当前期次组件消失");
    }
    

}
</script>
<style lang="scss" scoped>
    #currentDetail {
        background: rgb(236, 234, 234);
        padding: 10px;
        span{
            font-size:12px;
            color:rgb(90, 83, 83);
        }
        ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            li {
                font-size: 15px;
                margin-right: 10px;
                width: 25px;
                height:25px;
                border-radius: 50%;
                border:1px solid red;
                text-align: center;
                line-height: 25px;
                color: red;
            }
        }
        .tab1{
            margin-top:15px;
            border:1px solid  rgb(110, 101, 101);
            border-radius: 4px;
            th,td{
                width:150px;
                height:30px;
                line-height: 30px;
                text-align: center;
                border:1px solid  rgb(110, 101, 101);
            }
            td{
                background: white;
                 color:rgb(240, 86, 86);
            }
            th{
                background: rgb(250, 250, 250);
                color:rgb(110, 101, 101);
            }
        }
        .tab2{
            margin-top:15px;
            border:1px solid  rgb(110, 101, 101);
            border-radius: 4px;
            
        }
    }
</style>



