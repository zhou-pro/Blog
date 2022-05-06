import request from './blogAxios'

export function getUserRoles(query){
    return request({
      url: `/roles`,
      params:query
    })
}