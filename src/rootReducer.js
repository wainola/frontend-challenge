import { combineReducers } from "redux";
import FinCardReducer from "./FinCards/FinCardsReducer";
import FinFormReducer from "./Form/FormReducer";

// this is the root reducer
export default combineReducers({
  cards: FinCardReducer,
  card_to_patch: FinFormReducer
});
