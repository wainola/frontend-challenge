import {
  SEND_TO_PATCH
} from '../actions/index'

export default function(state={}, action){
  switch(action.type){
    case SEND_TO_PATCH:
      console.log('sendtopatch', action.payload)
      return { ...state, card: { ...action.payload } }
    default:
      return state
  }
}