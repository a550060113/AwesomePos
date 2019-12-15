import {post} from '@/commen/http.js'
import {setStore,getStore} from '@/commen/mUtils.js'
import {
    RECODE_ADMIN,
    DELECTE_ADMIN
} from '../mutation-types'
const state = {
    adminName:'admin',   //管理员
    password:'123456',
}
const mutations = {
    //用户保存到localStorage
    [RECODE_ADMIN](state,data){
        var admin = localStorage.getItem('admin')
        if(!admin){
            // state.adminName = data.name
            setStore('user',{adminName:state.adminName})
        }
    },
    //从localStorage中删除用户
    [DELECTE_ADMIN](state){
        var admin = localStorage.getItem('admin')
        if(admin){
            localStorage.removeItem('user')
        }
    }
}

const actions = {
    //登录
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
