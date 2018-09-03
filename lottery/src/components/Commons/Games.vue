<template>
    <div id="Games">
        <ul>
            <li v-for="(item, index) in resp" :key="index" @click="pushToView(item)">
                <div class="cellLeft">
                    <img :src=item.imageUrl alt="">
                </div>
                <div class="cellRight">
                    <span>{{item.title}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
   props:['resp']
}
</script>
<style lang="scss" scoped>
    #Games{
        width:100%;
        margin-top:12px;
        background:white;
        overflow: hidden;
        ul{
            width:100%;
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            li{
                width:50%;
                height:90px;
                display: flex;
                flex-direction: row;
                .cellLeft{
                    width:30%;
                    padding:10px;
                    img{
                        width:100%;
                    }
                }
                .cellRight{
                    padding-top:20px;
                    font-size:16px;
                    font-weight: 500;
                    color:#3c3e45;
                }
            }
        }
    }
</style>

