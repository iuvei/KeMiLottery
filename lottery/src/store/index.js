import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
import Cart from './Cart'

const state = {
    selectedIndex: 0,
    ssqSelectedIndex:1, //双色球开奖历史的头部切换选中值
    currentSSQ: {},
    ssqData: {},
    ballsZoushi: 0, //双色球走势
}
const getters = {
    redBallData(state){
        if(state.ssqData.data){
            //200条数据
            var data = state.ssqData.data.data;
            var redBallData = [];
            data.forEach((item) => {
                redBallData.push({
                    luckyBlue: item.luckyBlue,
                    missNumber: item.missNumber.general.slice(0,33),
                    period: item.period,
                    winnerNumber: item.winnerNumber.slice(0,6)
                })
            })
            
        }
        return redBallData;
    },
    blueBallData(state){
        if(state.ssqData.data){
            //200条数据
            var data = state.ssqData.data.data;
            var blueBallData = [];
            data.forEach((item)=>{
                // redMissNumber
                blueBallData.push({
                    luckyBlue:item.luckyBlue,
                    missNumber:item.missNumber.general.slice(33),
                    period: item.period,
                    winnerNumber: item.winnerNumber.slice(6)
                })
            })
            return blueBallData;
        }
    }
}
const mutations = {
    SELECTEINDEX(state,payload){
        state.selectedIndex = payload.selectedIndex;
    },
    SSQSELECTEDINDEX(state,payload){
        state.ssqSelectedIndex = payload.ssqSelectedIndex;
    },
    SETCURRENTSSQ(state,payload){
        state.currentSSQ = payload.currentSSQ;
    },
    SETSSQDATA(state,payload){
        state.ssqData = payload;
    },
    BALLSZOUSHI(state,payload){
        state.ballsZoushi = payload.selectedIndex;
    }
}
const actions = {
    //设置双色球数据
    SetSSQData(context){
        axios.get('http://localhost:8888/api/ssq')
        .then((res)=>{
            context.commit('SETSSQDATA',res);
        })
    }
}
const modules = {
    Cart
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})


