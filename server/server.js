var express = require('express');
var app = express();
var request = require('request');
var path = require('path');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 设置静态资源管理,可以直接使用localhost:3000/xxx/xxx.png
app.use(express.static(path.join(__dirname, 'public')))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

var secret = 'shhhhhhared-secret';
/**
 * 除了登录页面之外,所有的页面都需要进行token验证
 */
app.use(expressJWT({ secret: secret}).unless({path: ['/login']}));


/*
    req: 请求体,请求头和请求体都放到req对象中

    res: 响应体,通过响应对象给前端返回相应的结果
*/
// app.get('/home',function(req,res){
//     console.log("请求");
//     // console.log(req.query);
//     res.send("<h1>Hello<h1>");
// })
//彩票api
var baseURL = "http://api.caipiao.163.com/missNumber_trend.html?gameEn=";
app.get('/api/ssq',function(req,res){
    request(baseURL+"ssq",function(error,response,body){
         res.send(body);
    })
})

// 轮播图
var imageBase = 'http://localhost:8888/'
app.get('/api/focus',function(req,res){
    var focus = [
        {title:'翻拍赢大礼',imageUrl:imageBase+'/focus/1533891388968_1.jpg'},
        {title:'赚钱三法宝',imageUrl:imageBase+'/focus/1534923480745_1.jpg'},
        {title:'大转盘',imageUrl:imageBase+'/focus/1534993123777_1.jpg'},
        {title:'今日财运走势',imageUrl:imageBase+'/focus/1535614687558_1.jpg'},
        {title:'红包',imageUrl: imageBase+'/focus/1535614872375_1.jpg'}
    ]
    res.send(focus);
})
// 彩种列表
app.get('/api/games',function(req,res){
    var games = [
        {title:'领取本金',imageUrl:imageBase+'/index/1.png',name:'bj'},
        {title:'反转大奖盘',imageUrl:imageBase+'/index/2.png',name:'zp'},
        {title:'翻拍赢大礼',imageUrl:imageBase+'/index/3.png',name:'dj'},
        {title:'走势图',imageUrl:imageBase+'/index/0.png',name:'trend'},
        {title:'双色球',imageUrl:imageBase+'/index/21.png',name:'ssq'},
        {title:'大乐透',imageUrl:imageBase+'/index/10.png',name:'dlt'},
        {title:'竞彩足球',imageUrl:imageBase+'/index/16.png',name:'zq'},
        {title:'彩票预测',imageUrl: imageBase+'/index/6.png',name:'yc'},
        {title:'任选9',imageUrl:imageBase+'/index/12.png',name:'rx9'},
        {title:'快3系列',imageUrl:imageBase+'/index/5.png',name:'k3'},
        {title:'体育资讯',imageUrl:imageBase+'/index/19.png',name:'zx'},
        {title:'竞彩篮球',imageUrl:imageBase+'/index/15.png',name:'lq'},
        {title:'3D',imageUrl: imageBase+'/index/23.png',name:'3d'},
        {title:'时时彩',imageUrl:imageBase+'/index/20.png',name:'ssc'},
        {title:'11选5',imageUrl:imageBase+'/index/4.png',name:'115'}
    ]
    res.send(games);
})

//走势图
app.get('/api/trendimageUrl',function(req,res){
    var imageUrls = [
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
    res.send(imageUrls);
})

//登录
app.post('/login',(req,res)=>{
    // console.log(req.body.username);
    var username = req.body.username;
    var password = req.body.password;
    if(username=='gcj'&&password=='123'){
        console.log('该用户存在,可以登录');
        var token = jwt.sign({username:username},secret, {
                expiresIn : 60*60*24// 授权时效24小时
        });
        console.log(token);
        res.send(
            {
                message:`"欢迎${username}回来"`,
                success:true,
                token: token
            }
        );
    }
})

app.listen(8888,function(){
    console.log("服务器已经打开了");
})