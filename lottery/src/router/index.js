import Vue from 'vue'
import Router from 'vue-router'
//导入由 路由控制的模块
//import DaTing from '@/components/DaTing/DaTing'
const DaTing = () => import(/* webpackChunkName: "DaTing" */ '@/components/DaTing/DaTing')
//双色球组件
const SSQ = () => import(/*webpackChunkName: "SSQ"*/ '@/components/DaTing/SSQ/ssq')
const SSQHistory = () => import(/*webpackChunkName: "SSQLiShi"*/ '@/components/DaTing/SSQ/ssqHistory')
const AllList = () => import(/*webpackChunkName: "AllList"*/ '@/components/DaTing/SSQ/allList')
const CurrentDetail = () => import(/*webpackChunkName: "CurrentDetail"*/ '@/components/DaTing/SSQ/currentDetail')
const TrendView = () => import(/*webpackChunkName: "TrendView"*/ '@/components/DaTing/Trend/TrendView')

const SSQTrend = () => import(/*webpackChunkName: "SSQTrend"*/ '@/components/DaTing/Trend/SSQTrend/SSQTrend')

const JingJiChang = () => import(/* webpackChunkName: "JingJiChang" */ '@/components/JingJiChang/JingJiChang')
const FaXian = () => import(/* webpackChunkName: "FaXian" */ '@/components/FaXian/FaXian')
const KaiJiang = () => import(/* webpackChunkName: "KaiJiang" */ '@/components/KaiJiang/KaiJiang')
const WoDe = () => import(/* webpackChunkName: "WoDe" */ '@/components/WoDe/WoDe')

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/DaTing'},
    {
      path:'/DaTing',
      component:DaTing,
      name:'DaTing',
      children:[
        {
          path:'TrendView',
          component:TrendView,
          name:'zst',
          children:[
            {
              path:'SSQTrend',
              component:SSQTrend,
              name:'ssqTrend'
            }
          ]
        },
        {
          path: 'ssq',
          component: SSQ,
          name: 'ssq'
        },
        {
          path: 'ssqHistory',
          component: SSQHistory,
          name: 'ssqHistory',
          redirect:{name: 'AllList'},
          children: [
            {
              path: 'AllList',
              component: AllList,
              name: 'AllList'
            },
            {
              path: 'CurrentDetail',
              component: CurrentDetail,
              name: 'CurrentDetail'
            }
          ]
        }
      ]
    },
    {path:'/JingJiChang',component:JingJiChang,name:'JingJiChang'},
    {path:'/FaXian',component:FaXian,name:'FaXian'},
    {path:'/KaiJiang',component:KaiJiang,name:'KaiJiang'},
    {path:'/WoDe',component:WoDe,name:'WoDe'},
  ]
})
