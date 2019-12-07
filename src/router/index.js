import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component:resolve => require(['@/views/login.vue'],resolve)
    // },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      meta:{title:'首页'},
      component:resolve => require(['@/views/home.vue'],resolve),
      children:[
      //   {
      //   path:"/home",
      //   redirect:'/home/collect'
      // },
      {
        path:'collect',
        name:'collect',
        meta:{title:'收银'},
        component:resolve =>require(['@/views/collect.vue'],resolve)
      },{
        path:'test',
        name:'test',
        meta:{title:'测试'},
        component:resolve=>require(['@/views/test.vue'],resolve)
      }]
    }
  ]
})
