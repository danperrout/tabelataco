import { FETCH_FOOD_DATA, FILTER_FOOD } from "../actions/types";

export default function foodReducer(state = [{ isLoaded: false }], action) {
  switch (action.type) {
    case FETCH_FOOD_DATA:
      return {
        isLoaded: true,
        foods: action.payload,
        filteredFoods: action.payload
      };
    case FILTER_FOOD:
      return {
        ...state,
        filteredFoods: action.payload
      };
    default:
      return state;
  }
}
