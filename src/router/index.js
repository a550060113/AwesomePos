import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component:resolve => require(['@/components/login.vue'],resolve)
    // },
    {
      path:'/',
      name:'home',
      component:resolve => require(['@/components/home.vue'],resolve)
    }
  ]
})
