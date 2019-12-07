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
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:resolve => require(['@/components/home.vue'],resolve),
      children:[{
        path:"/home",
        redirect:'/home/collect'
      },{
        path:'collect',
        name:'collect',
        component:resolve =>require(['@/views/collect.vue'],resolve)
      }]
    }
  ]
})
