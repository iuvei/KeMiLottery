import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    selectedIndex: 0,
    ssqSelectedIndex:1, //双色球开奖历史的头部切换选中值
    currentSSQ: {}
}
const getters = {

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
    }
}
const actions = {

}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})


