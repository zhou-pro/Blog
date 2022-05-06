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
    url:'/moment/29'
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

//模糊查询
export function getMomentByKeyword(query){
  return request({
    url:`/moment/search`,
    method:'post',
    params:query
  })
}

export function getMomentByUserId(userId){
  return request({
    url:`/moment/user/${userId}`
  })
}

export function getCategoryMomentById(cId){
  return request({
    url:`moment/category/${cId}`
  })
}
export function getLabelList(query){
    return request({
      url:`/label`,
      params:query
    })
}

export function addLabelByMomentId(id,labels){
  return request({
    url:`/moment/${id}/labels`,
    method:'post',
    data:labels
  })
}