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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
