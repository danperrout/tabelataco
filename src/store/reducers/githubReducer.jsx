import { FETCH_GITHUB_DATA } from "../actions/types";

export default function githubReducer(state = [], action) {
  switch (action.type) {
    case FETCH_GITHUB_DATA:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
