<template>
    <div id="WoDe">
        <div class="topBar">
            <span @click="$router.push('DaTing')">
                <i class="fa fa-angle-left"></i>
            </span>
            <h1>登录</h1>
            <span><i>&nbsp;</i></span>
        </div>
        <Focus :focus="images"></Focus>
        <div class="context">
            <input class="inPut" type="text" placeholder="邮箱/手机号" v-model="userInfo.username">
            <input class="inPut" type="passworld" placeholder="密码" v-model="userInfo.password">
            <input class="login" type="button" value="登录" @click="login">
        </div>
        <div class="bottom">
            <ul>
                <li>忘记密码</li>
                <li>注册</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'
export default {
    components:{Focus},
    data(){
        return {
            images:[],
            userInfo: {
                username: '',
                password: ''
            },
            res: {}
        }
    },
    methods:{
        login(){
            this.loadData('/login','post','res',this.userInfo);
        }
    },
    watch: {
        res(newValue){
            if(newValue.token){
                localStorage.setItem('token',newValue.token);
            }
        }
    },
    created(){
        this.loadData('/api/focus','get','images'); 
    }
}
</script>
<style lang="scss" scoped>
    #WoDe{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:#f0efe7;
        z-index:2;
        .topBar{
            width:100%;
            height:50px;
            background:#d91d37;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items:center;
            color:white;
            
            h1{
                font-size:24px;
                font-weight:bolder;
                margin: auto;
            }
            i{
                font-size:40px;
                margin:5px;
            }
        }
        .context{
            width:94%;
            height:30%;
            padding:12px 3%;
            display:flex;
            flex-direction: column;
            input{
                margin-bottom:15px;
                border:none;
            }
            .inPut{
                width:100%;
                height:50px;
                outline-color:lightblue;
                border-radius: 4px;
            }
            .login{
                width:100%;
                height:48px;
                line-height:48px;
                text-align:center;
                color:#fff;
                background:#b01e35;
                font-size:20px;
                border-radius: 8px;
                margin-top:15px;
            }
        }
        .bottom{
            width:100%;
            height:54px;
            position:fixed;
            bottom:0;
            ul{
                width:100%;
                height:100%;
                display: flex;
                flex-direction: row;
                li{
                    width:50%;
                    text-align:center;
                    background:white;
                    color:lightblue;
                    line-height:54px;
                    border:1px solid #ccc;
                }
            }
        }
    }
</style>


