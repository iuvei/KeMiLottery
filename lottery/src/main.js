// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
Vue.config.productionTip = false

axios.defaults.baseURL = process.env.API_ROOT;
//console.log(axios.defaults.baseURL);

//登录验证
axios.interceptors.request.use(function(config){
  console.log("所有请求被拦截");
  var token = localStorage.getItem('token');
  if(token){
    config.headers.Authorization = 'Bearer '+token;
  }
  return config;
},function(error){
  return Promise.reject(error);
});


//this.$axios.get()
Vue.prototype.$axios = axios;

Vue.use(Vuex)

//将所有浏览器的默认设置清空
import 'reset-css'

//导入字体库
import 'font-awesome/css/font-awesome.css'

//注册全局的mixin
import mixins from '@/mixins/mixins.js'
Vue.mixin(mixins);

import store from './store/index'
import '@/directives/random'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
