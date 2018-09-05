const state = {
    //订单列表
    orderList: []
}
const getters = {

}
const mutations = {
    //往订单里新增选项
    ADDTOORDERLIST(state,payload){
        state.orderList.push(payload.order);
    },
    //清楚全部
    CLEARORDERLIST(state){
        state.orderList=[];
    },
    //清楚1行
    CLEARONELINE(state,payload){
        state.orderList.splice(payload,1);
    }
}
const actions = {

}
export default{
    state,
    getters,
    mutations,
    actions
}