import request from "./blogAxios";

export function getAllMoment(query){
  return request({
    url:'/moment',
    method:'get',
    params:query
  })
}

export function getMomentById(id){
  return request({
    url:`/moment/${id}`
  })
}

export function login(data){
  return request({
    url:'/login',
    method:'post',
    data
  })
}

export function signUpuser(data){
  return request({
    url:'/users',
    method:'post',
    data
  })
}

export function sendCommentById(data){

  return request({
    url:`/comment`,
    method:'post',
    data
  })
}

export function deleteMomentById(id){
  return request({
    url:`moment/${id}`,
    method:'delete'
  })
}

export function createMoment(data){
  return request({
    url:'/moment',
    method:'post',
    data
  })
}

export function getBannerList(){
  return request({
    url:'/moment/27'
  })
}

export function deleteComentById(id){
  return request({
    url:`comment/${id}`,
    method:'delete'
  })
}

export function replyComment(id, data){
  return request({
    url:`/comment/${id}/reply`,
    method:'post',
    data
  })
}

export function getCommentByMomentId(query){
  return request({
    url:`/comment`,
    params:query
  })
}