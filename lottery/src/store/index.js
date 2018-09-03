import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'

const state = {
    selectedIndex: 0,
    ssqSelectedIndex:1, //双色球开奖历史的头部切换选中值
    currentSSQ: {},
    ssqData: {},
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
    }
}
const mutations = {
    SELECTEINDEX(state,payload){
        state.selectedIndex = payload.selectedIndex;
    },
    SSQSELECTEDINDEX(state,payload){
        console.log("修改双色球历史的tab");
        state.ssqSelectedIndex = payload.ssqSelectedIndex;
    },
    SETCURRENTSSQ(state,payload){
        state.currentSSQ = payload.currentSSQ;
    },
    SETSSQDATA(state,payload){
        state.ssqData = payload;
        console.log("请求到的数据是");
        console.log(payload);
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
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})


