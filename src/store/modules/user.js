import {post } from '@/commen/http.js'
import {setStore,getStore} from '@/commen/mUtils.js'
import router from "../../router";
import { Message,Loading } from 'element-ui';

import {
    RECODE_ADMIN,
    DELECTE_ADMIN,
    RECODE_STATE
} from '../mutation-types'
import da from "element-ui/src/locale/lang/da";
const state = {
    adminName:'admin',   //管理员
    password:'123456',
    // adminName:''   //管理员
}
const mutations = {
    //保存用户名到state
    [RECODE_STATE](state,name){
        state.adminName = name
    },
    //用户保存到localStorage
    [RECODE_ADMIN](state,data){
        var admin = localStorage.getItem('user')
        if(!admin){ //没有就保存
            setStore('user',{adminName:state.adminName})
        }
    },
    //从localStorage和state中删除用户
    [DELECTE_ADMIN](state){
        var admin = localStorage.getItem('user')
        if(admin){
            localStorage.removeItem('user')
           /* 接口新增,使用接口的时候开启*/
            // if(state.adminName){
            //     state.adminName = ''
            // }
        }
    }
}

const actions = {
    /*写死的登录*/
    login({commit,state},data){
       return new Promise((resolve,reject)=>{
           commit('RECODE_ADMIN')
           if(getStore('user')){
               resolve()
           }else{
               reject('登录失败')
           }
       })
    },
    /*api登录验证*/
    _login({commit,state},data){
        return new Promise((resolve,reject)=>{
           var loading =  Loading.service({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            //登录验证
            post('/Pos/src/servlet/LogingServlet',{
                userName:data.name,
                password:data.psd
            }).then(res=>{
                console.log(res)
                if(res.data.success){
                    loading.close()     //成功后关闭loading
                    commit('RECODE_STATE',data.name)        //保存成功的用户名到state
                    commit('RECODE_ADMIN')      //保存用户名到localStorage
                    router.push({path:'/home',replace:true})
                    resolve('登录成功')
                }else{
                    reject(res.data.message)
                }
            }).catch(err=>{
                console.log(err)
            })
        })

    }

}

const getters = {
    //获用户名
    getName(state){
        return state.adminName
    },
    //获取密码
    getPassword(state){
        return state.password
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
