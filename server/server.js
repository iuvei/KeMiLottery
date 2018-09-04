const express = require('express');
const request = require('request');
const path = require('path');
var app = express();


//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

//设置服务器静态资源托管
app.use(express.static(path.join(__dirname,'public')))
//轮播图
var imageBase = 'http://192.168.2.164:8888/'
app.get('/api/focus',function(req,res){
    var focus = [
        {title:'翻盘赢大礼',imageUrl:imageBase+'/focus/1533891388968_1.jpg'},
        {title:'赚钱3法宝',imageUrl:imageBase+'/focus/1534923480745_1.jpg'},
        {title:'大转盘',imageUrl:imageBase+'/focus/1533891388968_1.jpg'},
        {title:'今日财运走势',imageUrl:imageBase+'/focus/1535614687558_1.jpg'},
        {title:'红包',imageUrl:imageBase+'/focus/1535614872375_1.jpg'}
    ]
    res.send(focus);
})
//轮播图2
app.get('/api/focus2',function(req,res){
    var focus = [
        {title:'',imageUrl:imageBase+'/focus/001.jpeg'},
        {title:'',imageUrl:imageBase+'/focus/002.jpg'},
        {title:'',imageUrl:imageBase+'/focus/003.jpg'},
    ]
    res.send(focus);
})
//走势图
app.get('/api/trendIcon',function(req,res){
    var icons = [
        {
            title: '双色球走势图',
            imageUrl: 'https://pimg1.126.net/nfop/caipiao/zoushitutubiao/res/5274f94e46a97275.png',
            name: 'ssqTrend'
        },
        {
            title: '大乐透走势图',
            imageUrl: 'https://pimg1.126.net/nfop/caipiao/zoushitutubiao/res/b71daa26f79016fa.png',
            name: 'dltTrend'
        },
        {
            title: '重庆时时彩走势图',
            imageUrl:'https://pimg1.126.net/nfop/caipiao/zoushitutubiao/res/75716d84098a12ca.png',
            name: 'cqsscTrend'
        },
        {
            title: '福彩3D走势图',
            imageUrl: 'https://pimg1.126.net/nfop/caipiao/zoushitutubiao/res/96e61e2b1321ede2.png',
            name:'3dTrend'
        },
        {
            title: '11选5走势图',
            imageUrl:'https://pimg1.126.net/nfop/caipiao/shandongd11/res/760ea47c1d106350.png',
            name: '115Trend'
        },
        {
            title: '七星彩走势图',
            imageUrl:'https://pimg1.126.net/nfop/caipiao/shandongd11/res/7cf988b838c0be38.png',
            name:'qxcTrend'
        },
        {
            title: '快3走势图',
            imageUrl: 'https://pimg1.126.net/nfop/caipiao/shandongd11/res/b9f9bbfbbc0c9bb7.png',
            name:'ksTrend'
        },
        {
            title:'七乐彩走势图',
            imageUrl:'https://pimg1.126.net/nfop/caipiao/shandongd11/res/cb07c2a9d5e0e03f.png',
            name:'qlcTrend'
        },
        {
            title:'排列3走势图',
            imageUrl:'https://pimg1.126.net/nfop/caipiao/shandongd11/res/4f34542a8a5ce680.png',
            name:'pl3Trend'
        },
        {
            title: '排列5走势图',
            imageUrl:'https://pimg1.126.net/nfop/caipiao/shandongd11/res/4852cb446b859c3c.png',
            name:'pl5Trend'
        }
    ]
    res.send(icons);
})
//彩票列表
app.get('/api/games',function(req,res){
    var games = [
        {title:'领取本金',imageUrl:imageBase+'/index/1.png',name:'lqbj'},
        {title:'反转大奖盘',imageUrl:imageBase+'/index/2.png',name:'fzdjp'},
        {title:'翻盘赢大礼',imageUrl:imageBase+'/index/3.png',name:'fpydl'},
        {title:'走势图',imageUrl:imageBase+'/index/0.png',name:'zst'},
        {title:'双色球',imageUrl:imageBase+'/index/21.png',name:'ssq'},
        {title:'大乐透',imageUrl:imageBase+'/index/10.png',name:'dlt'},
        {title:'竞彩足球',imageUrl:imageBase+'/index/16.png',name:'jczq'},
        {title:'彩票预测',imageUrl:imageBase+'/index/6.png',name:'cpyc'},
        {title:'任选9',imageUrl:imageBase+'/index/12.png',name:'rx9'},
        {title:'快3系列',imageUrl:imageBase+'/index/5.png',name:'k3xl'},
        {title:'体育资讯',imageUrl:imageBase+'/index/19.png',name:'tyzx'},
        {title:'竞彩篮球',imageUrl:imageBase+'/index/15.png',name:'jclq'},
        {title:'3D',imageUrl:imageBase+'/index/23.png',name:'3d'},
        {title:'时时彩',imageUrl:imageBase+'/index/23.png',name:'ssc'},
        {title:'11选5',imageUrl:imageBase+'/index/4.png',name:'11x5'}
    ]
    res.send(games);
})

//req: 请求体，请求头和请求体都放到req对象中
// 请求的内容会放置到req的qurey属性

//res: 响应体，

// app.get('/home',function(req,res){
//     console.log(req.query);
//     //console.log('请求');
//     res.send('<h1>hello</h1>');
// })

var baseUrl = "http://api.caipiao.163.com/missNumber_trend.html?gameEn=";
//自定义api   /api/ssq
app.get('/api/ssq',function(req,res){
    //通过request向目的服务器（例如网易）发送请求
    request(baseUrl+'ssq',function(err,response,body){
        //console.log(body);
        //通过res将数据显示到浏览器上
        res.send(body);
    })
})

app.listen(8888,function(){
    console.log('服务器打开了');
})