import foodReducer from "./foodReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  food: foodReducer
});

export default rootReducer;
