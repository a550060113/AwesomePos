import axios from 'axios'
import qs from 'qs'
import { Loading,Message } from 'element-ui';

const $axios = axios.create({
  timeout: 30000,
  baseURL: '/api'
})
let loading = null;


$axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
    loading = Loading.service({
       text: '拼命加载中',
       spinner: 'el-icon-loading',
       background: 'rgba(0, 0, 0, 0.7)' })
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  $axios.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
    if (loading) {
      loading.close()
    }
    console.log(response)
    const code = response.status
    if(code >= 200 && code <=300 || code == 304){
      return Promise.resolve(response.data);
    }else{
      return Promise.resolve(response)
    }
  }, function (error) {
    // 对响应错误做点什么
    if (loading) {
      loading.close()
    }
    let err = error.response
    if(err){
      switch(err.status){
        case 404:
            Message.error(err.data.reason || '网络请求不存在');
            break;
        default:
            Message.err(err.data.message)
      }
    }
    console.log(error)
    console.log('err',error.response)
    return Promise.reject(error);
  });

function post(url,data){
  return new Promise((resolve,reject)=>{
    $axios.get(url,qs.stringify(data)).then(res=>{
      resolve(res)
    }).catch(err=>{
      console.log(err)
      reject(err)
    })
  })
}

function get(url,data){
  return new Promise((resolve,reject)=>{
    $axios.get(url,{
      params:data
    }).then(res=>{
      resolve(res)
    },err=>{
      reject(err)
    })
  })
}
export {
  post,
  get
}