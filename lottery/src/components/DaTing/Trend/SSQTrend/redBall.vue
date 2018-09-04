<template>
    <div id="redBall">
        <div class="cellLeft">
            <ul>
                <li></li>
                <li v-for="(item,index) in redBallData" :key="index">
                    <span>{{item.period}}</span>
                </li>
            </ul>
        </div>
        <div class="cellRight">
           <table>
               <thead>
                   <tr>
                       <th v-for="(item,key) in 33" :key="key">
                           {{item>9?item:'0'+item}}
                       </th>
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="(item,key) in redBallData" :key="key">
                       <td v-for="(missNum,index) in item.missNumber" 
                       :key="index"
                       :class="{ball_red:missNum<=0}">
                           {{missNum>=1?missNum:(index+1)>9?(index+1):'0'+(index+1)}}
                       </td>
                   </tr>
               </tbody>
           </table>
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
    .ball_red{
        background-image: url('../../../../assets/images/ball18px.png');
        background-repeat: no-repeat;
        color: white;
        background-position: center -84px;
        font-size:12px;
    }
    $height: 25px;
     #redBall {
         margin-top:5px;
         display:flex;
         flex-direction:row;
        .cellLeft {
            width: 20%;
            height: 100%;
           
            ul {
                width: 100%;
                height: 100%;
                
                li {
                    width: 100%;
                    height: $height;
                    line-height: 30px;
                    text-align: center;
                    &:nth-child(2n){
                        background: white;
                    }
                }
            }
        }
        .cellRight{
            overflow-x: scroll;
            width: 80%;
            height: 100%;
            table {
                width:300%;
                text-align: center;
                thead {
                    th {
                        height: $height;
                        background: #f8f8f8;
                    }
                }
                tbody {
                    tr {
                        height: $height;
                        &:nth-child(2n-1){
                            background: white;
                        }
                        td{
                            line-height: 24px;
                        }
                    }
                }
            }
        }
    }
</style>


