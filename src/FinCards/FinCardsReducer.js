import {
  GET_CARDS,
  FAIL_GETTING_CARDS
} from '../actions/index'

export default function(state={}, action){
  switch(action.type){
    case GET_CARDS:
      console.log('reducer get_cards case', action.payload)
      return { ...state, data: [...action.payload.data] }
    case FAIL_GETTING_CARDS:
      return { ...state, err: [...action.payload] }
    default:
      return state
  }
}