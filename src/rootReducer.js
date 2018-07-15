import { combineReducers } from 'redux'
import FinCardReducer from './FinCards/FinCardsReducer'

export default combineReducers({
  cards: FinCardReducer
})