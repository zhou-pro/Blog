import * as actionTypes from "./contance"
import { getAllMoment } from '@/services/blog/blog'

const changeMomentsAction = res => ({
  type:actionTypes.CHANGE_MOMENTS,
  moments: res
})

export const getAllMoments = limit => {
  return dispatch => {
    getAllMoment(limit).then( res => {
      dispatch(changeMomentsAction(res))
    })
  }
}