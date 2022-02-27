import axios from 'axios'

import { getCache } from '../../utils/cache'

import { message } from 'antd'
const instance = axios.create({
  baseURL: '/user',
  timeout: 10000
})
//请求拦截
instance.interceptors.request.use(config => {
  //发送网络请求时， 在界面中间显示loading组件
  //携带token也可以在这里添加
  //data/params做一些序列化操作 
  // console.log(config);
  if(getCache('userInfo')){
    config.headers['Authorization'] = 'Bearer ' + getCache('userInfo').token
  }
  return config
},err=>{
  console.log(err);
})
//响应拦截
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if(err && err.response){
    message.error({
      content: `${err.response.status + err.response.data + '~'}`
    })
    
  }
})
export default instance