import Vue from 'vue'
import Router from 'vue-router'
import {getStore} from '@/commen/mUtils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'login'
    },
    {
      path: '/login',
      name: 'login',
      component:resolve => require(['@/views/login.vue'],resolve)
    },
    // {
    //   path:'/',
    //   redirect:'/home'
    // },
    {
      path:'/home',
      name:'home',
      meta:{title:'首页'},
      component:resolve => require(['@/views/home.vue'],resolve),
      children:[
        {
        path:"/home",
        redirect:'/home/collect'
      },
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
      },{
        path:'goodsTable',
        name:'goodsTable',
        meta:{title:'商品列表'},
        component:resolve=>require(['@/views/goodsTable.vue'],resolve)
      },{
        path:'statistics',
        name:'statistics',
        meta:{title:'数据表'},
        component:resolve=>require(['@/views/statistics.vue'],resolve)
      }]
    }
  ]
})

router.beforeEach((to,from,next)=>{
    if (to.path !== '/login'){
      if(getStore('user')){
        next()
      }else{
        next({
          path:'/login',
          replace:true
        })
      }
    }else if (to.path == '/login'){
        if(!getStore('user')){
            next()
        }else{
          next('/home')
        }
    }

})



export default router
