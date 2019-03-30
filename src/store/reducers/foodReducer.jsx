import { FETCH_FOOD_DATA } from "../actions/types";

export default function foodReducer(state = [{ isLoaded: false }], action) {
  switch (action.type) {
    case FETCH_FOOD_DATA:
      return {
        isLoaded: true,
        foods: action.payload
      };
    default:
      return state;
  }
}
