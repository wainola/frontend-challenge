import {
  SEND_TO_PATCH,
  PATCHING_CARD,
  FAIL_PATCHING_CARD
} from '../actions/index'

export default function(state={}, action){
  switch(action.type){
    case SEND_TO_PATCH:
      console.log('sendtopatch', action.payload)
      return { ...state, card: { ...action.payload } }
    case PATCHING_CARD:
      return { ...state, card_patched: action.payload.data }
    case FAIL_PATCHING_CARD:
      return { ...state, fail_patching: action.payload.err }
    default:
      return state
  }
}