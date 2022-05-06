import * as actionTypes from "./contance"
import { getAllMoment, getCategoryMomentById } from '@/services/blog/blog'

const changeMomentsAction = res => ({
  type:actionTypes.CHANGE_MOMENTS,
  moments: res
})

const changeCateMoment = res =>({
  type: actionTypes.CHANGE_MOMENTS_CATE,
  moments: res
})

export const getAllMoments = limit => {
  return dispatch => {
    getAllMoment(limit).then( res => {
      dispatch(changeMomentsAction(res))
    })
  }
}

export const getCateMoment = id => {
  return dispatch => {
    getCategoryMomentById(id).then(res => {
      dispatch(changeCateMoment(res.data))
    })
  }
}