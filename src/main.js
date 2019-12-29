import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
//初始化样式
import 'normalize.css'
import './iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/display.css';

//引入element-ui

import '@/commen/iconfont/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import {post,get} from './commen/http'
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.HOST = process.env.API_HOST
//导出excell
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

Vue.config.productionTip = false
console.log(process.env.API_HOST)

new Vue({
  // el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
