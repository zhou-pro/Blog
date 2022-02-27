import { Map } from 'immutable'
import * as actionTypes from "./contance"

const defaultState = Map({
 moments:[]
})

function reducer(state=defaultState, action){
  switch(action.type){
    case actionTypes.CHANGE_MOMENTS:
      return state.set('moments',action.moments)
    default:
    return state
  }
}

export default reducer