import request from "./blogAxios";

export function login(data){
  return request({
      url:'/login',
      method:'post',
      data
  })
}

export function getAvatarById(id){
  return request({
    url:`users/${id}/avatar`,
    method:'get'
  })
}

