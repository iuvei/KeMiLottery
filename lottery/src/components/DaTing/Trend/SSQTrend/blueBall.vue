<template>
    <div id="blueBall">
        <div class="cellLeft">
            <ul>
                <li></li>
                <li v-for="(item,key) in blueBallData" :key="key">
                    {{item.period}}
                </li>
            </ul>
        </div>
        <div class="cellRight">
            <table class="tabale table-bordered" ref="dataTable">
                <thead>
                    <tr>
                        <th v-for="(item,key) in 16" :key="key">
                            {{item>9?item:'0'+item}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,key) in blueBallData" :key="key">
                        <td v-for="(missNum,index) in item.missNumber" :key="index"
                        :class="{ball_red:missNum<=0}"
                        :ref="missNum<=0?'ball_blue':''"
                        >
                            {{missNum>=1?missNum:(index+1)>9?(index+1):'0'+(index+1)}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <canvas id="canvas" ref="canvas"></canvas>

        </div>
    </div>
</template>
<script>
export default {
    computed: {
        blueBallData(){
            return this.$store.getters.blueBallData;
        }
    },
    methods: {
          lineToAllBlue(){
                /*
                    this.$refs.canvas: 获取画布元素
                    this.$refs.dataTable: 获取表格
                */
                var canvas = this.$refs.canvas;
                var dataTable = this.$refs.dataTable;
                // 设置画布的宽高等于dataTable的宽高
                canvas.width = dataTable.clientWidth;
                canvas.height = dataTable.clientHeight;
                // 设置画布的定位
                canvas.style.position = "absolute";
                // 设置画布和顶部的距离,+19px的原因是首行的高度
                canvas.style.top = dataTable.offsetTop+19+'px';
                //创建2d绘图工具
                var context = canvas.getContext('2d');
                // 获取所有存储在this.$refs对象中的篮球选项
                 var blueBalls = this.$refs['ball_blue'];
                // 遍历所有的蓝球选项
                for(var i=0;i<blueBalls.length-1;i++){
                    // 获取蓝球的坐标x轴和y轴
                    var x = blueBalls[i].offsetLeft+15;
                    var y = blueBalls[i].offsetTop-10;
                    // 如果i=0,代表的是第一行,那就是作为线条的起点
                    if(i==0){
                        // 将笔触移动到该位置上
                        context.moveTo(x,y);
                    }else{
                        // 开始对每一个篮球进行前后连线
                        context.lineTo(x,y)
                    }
                }
                // 设置连线的颜色
                context.strokeStyle = "blue";
                //设置线条的宽度
                context.lineWidth = 1;
                //绘制路径(显示线条)
                context.stroke();
            }
        },
        updated(){
            this.lineToAllBlue();    
        },
        mounted(){
            this.lineToAllBlue();
        },

}
</script>
<style lang="scss" scoped>
    .ball_red {
        background-image: url('../../../../assets/images/ball18px.png');
        background-repeat: no-repeat;
        color: white;
        background-position: center -64px;
        font-size: 12px;
    }
    $height: 25px;
    #blueBall {
        margin-top:5px;
        display: flex;
        flex-direction: row;
        .cellLeft {
            width: 20%;
            height: 100%;
            // position: fixed;
            ul {
                width: 100%;
                height: 100%;
                li {
                    width: 100%;
                    height: $height;
                    line-height: $height;
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
                width: 150%;
                text-align: center;
                thead {
                    tr {
                        height: $height;
                        background: #f8f8f8;
                        th {
                            text-align: center;
                        }
                    }
                }
                tbody {
                    tr {
                        height: $height;
                         &:nth-child(2n-1){
                             background: white;
                         }
                    
                    }
                }
            }
        }
    }
</style>
