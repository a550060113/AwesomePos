import Vue from 'vue'
import App from './App'
import router from './router'
//初始化样式
import 'normalize.css'
import './iconfont/iconfont.css'
//引入element-ui

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import {post,get} from './commen/http'
Vue.prototype.$get = get
//导出excell
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
