import { combineReducers } from "redux";
import githubReducer from "./githubReducer";
import foodReducer from "./foodReducer";

export default combineReducers({
  github: githubReducer,
  food: foodReducer
});
